const validator = require('validator')
const bcrypt = require('bcrypt')
const { pool } = require('../../modules/mysql-init')

/*
findUser()
key = value ORDER BY key [DESC, ASC] LIMIT ?, ?
opt.key = 'idx' => key => value
opt.key = { fields: ['userid', 'id'], op: 'AND' }
opt.value = ['wonbin', '2'] =>  WHERE userid = value1 OR[AND] passwd = value2

pool.execute() 나오는 데이터 => INSERT, UPDATE, DELETE [{affectedRows},{field info}]
pool.execute() 나오는 데이터 => SELECT [ [ {id:1...}, {id:2...}, {id:3...} ],{field info}]
*/

// GET: field, value를 통한 회원 한명의 데이터
const findUser = async (key, value) => {
	let sql 
	try {
		sql = ` SELECT 
		U.*, 
		S.idx AS sidx, 
		S.provider, 
		S.snsname, 
		S.displayName, 
		S.email AS snsEmail, 
		S.profileURL, 
		S.status AS snsStatus,
		A.domain,
		A.apikey
		FROM users AS U 
		LEFT JOIN users_sns AS S
		ON U.idx = S.fidx
		LEFT JOIN users_api AS A
		ON U.idx = A.fidx
		WHERE U.${key} = ? `  
		const [r] = await pool.execute(sql, [value])
		if(r.length === 1)
			return { success: true, user: r[0] }
			else
				return { success: false, user: null }
	} 
	catch (err) {
		throw new Error(err)
	}
}

// GET: 모든 회원 데이터
const findAllUser = async (order='ASC') => {
	let sql 
	try {
		sql = ` SELECT * FROM users ORDER BY id ? `  
		const [users] = await pool.execute(sql, [order])
		return { success: true, users }
	} 
	catch (err) {
		throw new Error(err)
	}
}

// GET: field, value -> 회원 존재 여부 확인
const existUser = async (key,value) => {
	try {
		sql = ` SELECT * FROM users WHERE ${key} = ? `
		const [rs] = await pool.execute(sql, [value])
		return rs.length ? { success: true, idx: rs[0].idx } :{ success: false, idx: null }
	} 
	catch (err) {
		throw new Error(err)
	}
}

// GET: 로그인 처리
const loginUser = async ( userid, passwd ) => {
	let sql, compare
	try {
		sql = " SELECT * FROM users WHERE userid=?  "
		const [r] = await pool.execute(sql, [userid])
		if(r.length === 1) {
			compare = await bcrypt.compare( passwd + process.env.BCRYPT_SALT, r[0].passwd )
			return compare 
				? { success: true, user: r[0], msg: '로그인 되었습니다.' } 
				: { success: false, user: null, msg: '비밀번호가 일치하지 않습니다.' }
		}
		else return { success: false, user: null, msg: '아이디가 일치하지 않습니다.' }
	}
	catch (err) {
		throw new Error(err)
	}
}

module.exports = { findUser, findAllUser, existUser, loginUser }
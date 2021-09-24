const { pool } = require('../../modules/mysql-init')

const isUser = async (userid) => {
	sql = " SELECT * FROM users WHERE userid=? "
	const [rs] = await pool.execute(sql, [userid])
	return rs.length ? true : false
}

const isEmail = async (email) => {
	sql = " SELECT * FROM users WHERE email=? "
	const [rs] = await pool.execute(sql, [email])
	return rs.length ? true : false
}

module.exports = { isUser, isEmail }
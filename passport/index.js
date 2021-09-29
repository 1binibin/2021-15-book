const local = require('./local-strategy')
const kakao = require('./kakao-strategy')
const { findUser } = require('../models/auth')

const serialize = (user, done) => {
	done(null, user.idx)
}

const deserialize = async (idx, done) => {
	try {
		const { success, user } = await findUser('idx', idx)
		if(success) done(null, user)
		else done(null, false, '사용자 정보가 없습니다.')
	} 
	catch (err) {
		done(err)
	}
}

module.exports = passport => {
	passport.serializeUser(serialize)				// req.user -> idx (cookie로 부터 session 으로 넣어줌)
	passport.deserializeUser(deserialize)		// req.user <- DB user  정보를 받음. (session에다가 DB정보 넣어주기)
	local(passport)	// 로그인이 안되있다면  
	kakao(passport)
	// naver(passport)
	// facebook(passport)
}
/* 
1. 로그인 -> serialize : browser의 cookie에 idx를 남긴다.
2. 로그인 된 상태로 재접속 할때 마다 -> deserialize -> req.user에 넣어줌

3. strategy 로직
	가. 로그인 라우터의 미들웨어 passport.authenticate(['local', 'kakao', 'naver'])를 거쳐서 
	나. 각 Strategy로 가서
	다. local은 done() 실행
	라. kakao는 passport-kakao가 done을 내장하고 있으므로 미들웨어로만 넣어준다. 
*/


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
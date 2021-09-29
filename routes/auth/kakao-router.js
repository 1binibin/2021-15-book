const path = require('path')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const { alert } = require('../../modules/util')
// const {  } = require('../../models/auth')

router.get('/',  passport.authenticate('kakao'))

// 리다이렉트 -> 카카오서버
router.get('/cb', passport.authenticate('kakao', { failureRedirect: '/' }) ,(req, res, next) => {
	res.send(alert('로그인 되었습니다'))
})


module.exports = router
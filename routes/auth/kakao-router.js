const path = require('path')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const {  } = require('../../modules/util')
// const {  } = require('../../models/auth')

router.get('/',  passport.authenticate('kakao'))

// 리다이렉트
router.get('/cb', passport.authenticate('kakao', { failureRedirect: '/' }) ,(req, res, next) => {
	res.redirect('/')
})


module.exports = router
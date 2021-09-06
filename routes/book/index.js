const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util')

const saveRouter = require('./save-router')
const formRouter = require('./form-router')
const listRouter = require('./list-router')
const viewRouter = require('./view-router')


router.use('/form', formRouter)			// HTML: 글작성페이지
router.use('/save', saveRouter)			// POST: 저장
router.use('/list', listRouter)			// HTML / GET: 리스트페이지
router.use('/view', viewRouter)			//


module.exports = router
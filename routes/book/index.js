const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util')

const saveRouter = require('./save')
const formRouter = require('./form')


router.use('/form', formRouter)			// HTML: 글작성페이지
router.use('/save', saveRouter)			// POST: 저장


module.exports = router
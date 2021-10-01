const path = require('path')
const fs = require('fs-extra')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { moveFile } = require('../../modules/util')
const { isUser, isGuest, isMyBook } = require('../../middlewares/auth-mw')
const { updateBookStatus } = require('../../models/book')
const { updateFileStatus, findBookFiles } = require('../../models/file')

router.delete('/', isUser, isMyBook('body'), async (req, res, next) => {
	try {
		await updateBookStatus(req.body.idx)
		await updateFileStatus(req.body.idx)
		const { files } = await findBookFiles(req.body.idx)

		for(let { savename } of files){
			await moveFile(savename)
		}
		res.redirect(`/${req.lang}/book`)
	}
	catch(err) {
		next(createError(500, err))
	}
})


module.exports = router
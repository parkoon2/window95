const express = require('express')
const multer = require('multer')
const router = express.Router()
const controller = require('./portfolio.controller')
const mkdir = require('mkdirp')
const path = require('path')
const fs = require('fs')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let des = path.join(__dirname, `./uploads/portfolio`)

        console.log('!!!!!!!!!!!!!!!!!!!!', des)
        let isDirExists = fs.existsSync(des) && fs.lstatSync(des).isDirectory()

        if (!isDirExists) mkdir.sync(des)
        cb(null, des)
    },
    filename: function(req, file, cb) {
        const savedName = Date.now() + '-' + file.originalname
        req.savedName = savedName
        cb(null, savedName)
    }
})
const upload = multer({ storage })

router.post('/', upload.array('photos', 12), controller.createPortfolio)

module.exports = router

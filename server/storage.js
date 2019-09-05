const mkdir = require('mkdirp')
const path = require('path')
const fs = require('fs')
const multer = require('multer')

module.exports.portfolioStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        let des = path.join(__dirname, `./uploads/port-images`)

        let isDirExists = fs.existsSync(des) && fs.lstatSync(des).isDirectory()

        if (!isDirExists) mkdir.sync(des)
        cb(null, des)
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

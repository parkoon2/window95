const express = require('express')
const controller = require('./contact.controller')
const router = express.Router()

router.post('/', controller.handleContact)

module.exports = router

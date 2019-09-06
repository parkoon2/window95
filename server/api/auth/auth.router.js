const express = require('express')
const router = express.Router()
const controller = require('./auth.controller')

router.post('/login', controller.login)
router.post('/regist', controller.regist)

module.exports = router

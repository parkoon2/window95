const express = require('express')
const multer = require('multer')
const router = express.Router()
const controller = require('./portfolio.controller')
const storage = require('../../storage')

const upload = multer({ storage: storage.portfolioStorage })

router.get('/', controller.getPortfolios)
router.get('/:id', controller.getPortfolioById)
router.patch('/:id', controller.updatePortfolio)
router.delete('/:id', controller.deletePortfolio)
router.post('/', upload.array('photos', 12), controller.createPortfolio)

module.exports = router

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
    title: { type: String, required: true, maxlength: 512 },
    body: { type: String, required: true, maxlength: 1024 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    techs: { type: Array, required: true },
    git: { type: String, required: false, maxlength: 512 },
    demo: { type: String, required: false, maxlength: 512 },
    images: { type: Array, required: true }
})

const portfolioModel = mongoose.model('Portfolio', portfolioSchema)

module.exports = portfolioModel

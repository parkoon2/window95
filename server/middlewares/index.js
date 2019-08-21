const isProd = process.env.NODE_ENV === 'production'
const compression = require('compression')
const express = require('express')
const cors = require('cors')
module.exports = app => {
    if (isProd) {
        app.use(compression)
    } else {
    }
    app.use(cors())
    app.use(express.json())
}

const isProd = process.env.NODE_ENV === 'production'
const compression = require('compression')
const express = require('express')

module.exports = app => {
    if (isProd) {
        app.use(compression)
    } else {
    }

    app.use(express.json())
}

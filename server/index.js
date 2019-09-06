const next = require('next')
const express = require('express')
const mkdir = require('mkdirp')
const path = require('path')
const fs = require('fs')

const mongoose = require('mongoose')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('../routes')
// const handle = app.getRequestHandler();
const handle = routes.getRequestHandler(app)
const middlewares = require('./middlewares')
const { contact, portfolio, auth } = require('./api')

require('dotenv').config()
require('./config/passport')

mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => console.error(err))

app.prepare()
    .then(() => {
        const server = express()

        server.use(express.static(path.join(__dirname, 'uploads')))

        middlewares(server)

        server.use('/api/v1/contact', contact)
        server.use('/api/v1/portfolio', portfolio)
        server.use('/api/v1/auth', auth)

        const PORT = process.env.PORT || 3000
        server.use(handle).listen(PORT || 3000, err => {
            if (err) throw err
            console.log('> Ready on ' + PORT)
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })

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
const config = require('./config')
const middlewares = require('./middlewares')
const { contact, portfolio } = require('./api')

require('dotenv').config()

var multer = require('multer')

const getToday = () => {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()

    today = `${yyyy}-${mm}-${dd}`

    return today
}

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

        console.log('config.DB_URI', config.DB_URI, process.env.DB_URI)

        server.use(express.static(path.join(__dirname, 'uploads')))

        // try {
        //     fs.unlinkSync(
        //         path.join(__dirname, './uploads/photos-1566099471716.png')
        //     )
        // } catch (err) {
        //     console.log(err)
        // }

        middlewares(server)

        server.use('/api/v1/contact', contact)
        server.use('/api/v1/portfolio', portfolio)

        server.use(handle).listen(config.PORT, err => {
            if (err) throw err
            console.log('> Ready on ' + config.PORT)
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })

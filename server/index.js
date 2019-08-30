const next = require('next')
const express = require('express')
const mkdir = require('mkdirp')
const path = require('path')
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('../routes')
// const handle = app.getRequestHandler();
const handle = routes.getRequestHandler(app)
const config = require('./config')
const middlewares = require('./middlewares')
const { contact } = require('./api')

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

var portfolio = multer.diskStorage({
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

var upload = multer({ storage: portfolio })

app.prepare()
    .then(() => {
        const server = express()

        server.use(express.static(path.join(__dirname, 'uploads')))

        try {
            fs.unlinkSync(
                path.join(__dirname, './uploads/photos-1566099471716.png')
            )
        } catch (err) {
            console.log(err)
        }

        middlewares(server)

        server.use('/api/v1/contact', contact)

        // server.get("/posts/:id", (req, res) => {
        //   return app.render(req, res, "/posts/detail", { id: req.params.id });
        // });

        server.post('/api/v1/portfolio', upload.array('photos', 12), function(
            req,
            res,
            next
        ) {
            // req.files is array of `photos` files
            // req.body will contain the text fields, if there were any
            // form data ==> req.body & req.files

            console.log('========= LOG START =======')
            console.log(req.savedName)
            console.log('========= LOG END =========')

            console.log('========= LOG START =======')
            console.log(req)
            console.log('========= LOG END =========')

            res.json({ filename: req.savedName })
        })

        server.use(handle).listen(config.PORT, err => {
            if (err) throw err
            console.log('> Ready on ' + config.PORT)
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })

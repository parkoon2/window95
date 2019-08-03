const next = require('next')
const express = require('express')
const nodemailer = require('nodemailer')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('../routes')
// const handle = app.getRequestHandler();
const handle = routes.getRequestHandler(app)
const config = require('./config')
const middlewares = require('./middlewares')
const { contact } = require('./api')

app.prepare()
    .then(() => {
        const server = express()

        middlewares(server)

        server.use('/api/v1/contact', contact)

        // server.get("/posts/:id", (req, res) => {
        //   return app.render(req, res, "/posts/detail", { id: req.params.id });
        // });

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'devparkoon@gmail.com', // gmail 계정 아이디를 입력
                pass: 'Pjh1590^^' // gmail 계정의 비밀번호를 입력
            }
        })

        let mailOptions = {
            from: '감사합니다 👻', // sender address
            to: 'parkoon 👻<devparkoon@gmail.com>', // list of receivers
            subject: 'Sending Email using Node.js', // 제목
            text: 'That was easy!' // 내용
        }

        // transporter.sendMail(mailOptions, function(error, info) {
        //     if (error) {
        //         console.log(error)
        //     } else {
        //         console.log('Email sent: ' + info.response)
        //     }
        // })

        server.use(handle).listen(config.PORT, err => {
            if (err) throw err
            console.log('> Ready on ' + config.PORT)
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })

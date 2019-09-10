const nodemailer = require('nodemailer')

const handleContact = (req, res) => {
    const contact = req.body

    const { name, email, subject, message } = contact(
        name,
        email,
        subject,
        message
    )

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const text = `
        보낸 사람: ${email} \n
        제목: ${subject} \n
        내용: ${message}

    `

    let mailOptions = {
        from: email, // sender address 이거 동작 안하는 듯, 확인 불가
        // to: 'parkoon 👻<devparkoon@gmail.com>', // list of receivers
        to: 'devparkoon@gmail.com', // list of receivers
        subject, // 제목
        text
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.status(500).json(error)
        } else {
            res.json({
                success: true,
                message: 'mail sent successfully'
            })
        }
    })
}

module.exports = {
    handleContact
}

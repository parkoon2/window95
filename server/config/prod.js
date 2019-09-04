console.log('========= LOG START =======')
console.log(process.env)
console.log('========= LOG END =========')

module.exports = {
    PORT: 3000,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    DB_URI: process.env.DB_URI
}

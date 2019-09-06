const contactRouter = require('./contact/contact.router')
const portfolioRouter = require('./portfolio/portfolio.router')
const authRouter = require('./auth/auth.router')
module.exports = {
    contact: contactRouter,
    portfolio: portfolioRouter,
    auth: authRouter
}

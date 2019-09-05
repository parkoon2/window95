const Portfolio = require('../../models/portfolio')

exports.createPortfolio = (req, res) => {
    const portfolioData = JSON.parse(req.body.portfolio)

    console.log('========= LOG START =======')
    console.log(portfolioData)
    console.log('========= LOG END =========')

    const portfolio = new Portfolio(portfolioData)

    portfolio.save((err, savedPortfolio) => {
        if (err) return res.status(442).send(err)

        res.json({
            success: true,
            portfolio: savedPortfolio
        })
    })
}

exports.deletePortfolio = (req, res) => {
    const portfolioId = req.params.id

    Portfolio.remove({ _id: portfolioId }, err => {
        if (err) return res.status(422).send(err)

        res.json({
            success: true,
            message: 'portfolio deleted successfully'
        })
    })
}

exports.updatePortfolio = (req, res) => {
    const portfolioId = req.params.id
    const portfolioData = req.body

    Portfolio.findById(portfolioId, (err, foundPortfolio) => {
        if (err) return res.status(422).send(err)

        if (!foundPortfolio) {
            return res.status(404).json({ message: 'portfolio not found' })
        }

        foundPortfolio.set(portfolioData)

        foundPortfolio.save((err, savedPortfolio) => {
            if (err) return res.status(422).send(err)

            res.json({
                success: true,
                updated: savedPortfolio
            })
        })
    })
}

exports.getPortfolios = (req, res) => {
    Portfolio.find({}, (err, foundPortfolio) => {
        if (err) return res.status(422).send(err)

        return res.json({
            success: true,
            portfolios: foundPortfolio
        })
    })
}
exports.getPortfolioById = (req, res) => {
    const portfolioId = req.params.id

    Portfolio.findById(portfolioId)
        .select('-__v')
        .exec((err, foundPortfolio) => {
            if (err) return res.status(422).send(err)

            res.json({
                success: true,
                portfolio: foundPortfolio
            })
        })
}

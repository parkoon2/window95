module.exports.createPortfolio = (req, res) => {
    console.log('========= LOG START =======')
    console.log(req.savedName)
    console.log('========= LOG END =========')

    console.log('========= LOG START =======')
    console.log(req.body.portfolio)
    console.log('========= LOG END =========')

    res.json({ filename: req.savedName })
}

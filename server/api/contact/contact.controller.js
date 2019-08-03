const handleContact = (req, res) => {
    const email = req.body

    const { name, from, message } = email

    console.log(name, from, message)
}

module.exports = {
    handleContact
}

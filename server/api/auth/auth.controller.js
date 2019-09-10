const passport = require('passport')
const jwt = require('jsonwebtoken')

exports.login = (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        if (err) {
            return res.status(442).send(err)
        }

        if (info) {
            return res.status(403).send(info)
        }

        const loggedUser = {
            id: user.userId,
            role: user.userId === 'parkoon' ? 'owner' : 'guest'
        }

        const token = jwt.sign(loggedUser, process.env.JWT_SECRET, {
            expiresIn: 60 * 60
        })

        res.json({
            message: 'logged in',
            token,
            user: loggedUser
        })
    })(req, res, next)
}

exports.regist = (req, res, next) => {
    passport.authenticate('regist', (err, user, info) => {
        if (err) {
            return res.status(442).send(err)
        }

        if (info) {
            return res.status(403).send(info)
        }

        const { userId, username } = user

        res.json({
            message: 'user created',
            user: {
                id: userId,
                username
            }
        })
    })(req, res, next)
}

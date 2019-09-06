const passport = require('passport')
const jwt = require('jsonwebtoken')
const jwtConfig = require('../../config/jwt')

exports.login = (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        console.log('========= LOG START =======')
        console.log(err, user, info)
        console.log('========= LOG END =========')

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

        console.log('logged user is...', loggedUser)

        const token = jwt.sign(loggedUser, jwtConfig.secret, {
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
    console.log('regist')
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

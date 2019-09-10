const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

const BCRYPT_SALT_ROUNDS = 12
const koon = {
    id: 'parkoon',
    password: '1234'
}

// login
passport.use(
    'login',
    new LocalStrategy(
        { usernameField: 'id', passwordField: 'password', session: false },
        (id, password, done) => {
            User.findOne({ userId: id }, (err, foundUser) => {
                if (err) return done(err)

                if (!foundUser) {
                    return done(null, false, {
                        message: '존재하지 않는 아이디입니다'
                    })
                }

                const isCorrect = bcrypt.compareSync(
                    password,
                    foundUser.password
                )

                if (!isCorrect)
                    return done(null, false, {
                        message: '패스워드가 일치하지 않습니다'
                    })

                return done(null, foundUser)
            })
        }
    )
)

passport.use(
    'regist',
    new LocalStrategy(
        {
            passReqToCallback: true,
            usernameField: 'id',
            passwordField: 'password'
        },
        (req, id, password, done) => {
            User.findOne({ userId: id }, (err, foundUser) => {
                if (err) return done(err, null)

                if (foundUser) {
                    return done(null, false, {
                        message: '이미 등록되어 있는 아이디입니다.'
                    })
                }

                const hashedPassword = bcrypt.hashSync(
                    password,
                    BCRYPT_SALT_ROUNDS
                )

                const newUser = new User({
                    userId: id,
                    password: hashedPassword,
                    username: req.body.username
                })

                newUser.save((err, savedUser) => {
                    if (err) return done(err, null)
                    return done(null, savedUser)
                })
            })
        }
    )
)

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
                    return done(null, false, { message: 'incorrect user id' })
                }

                const isCorrect = bcrypt.compareSync(
                    password,
                    foundUser.password
                )

                if (!isCorrect)
                    return done(null, false, {
                        message: 'incorrect user password'
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

                console.log('foundUser...', foundUser)

                if (foundUser) {
                    return done(null, false, { message: 'user already taken' })
                }

                const hashedPassword = bcrypt.hashSync(
                    password,
                    BCRYPT_SALT_ROUNDS
                )

                console.log({
                    userId: id,
                    password: hashedPassword,
                    username: req.body.username
                })

                const newUser = new User({
                    userId: id,
                    password: hashedPassword,
                    username: req.body.username
                })

                newUser.save((err, savedUser) => {
                    if (err) return done(err, null)
                    console.log('user created...')
                    return done(null, savedUser)
                })
            })
        }
    )
)

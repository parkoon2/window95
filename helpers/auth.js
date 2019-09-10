import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { userConext } from '../context/userContext'
import { useContext } from 'react'

export const isOwner = () =>
    JSON.parse(localStorage.getItem('user')).role === 'owner'
export const isAuthenticated = () => !!localStorage.getItem('user')

export const clientAuth = () => {
    const token = Cookies.getJSON('jwt')
    const verifiedToken = verifyToken(token)

    return verifiedToken
}

const verifyToken = token => {
    if (token) {
        const decodedToken = jwt.decode(token)

        if (!decodedToken) return false

        const expiresAt = decodedToken.exp * 1000
        if (decodedToken && new Date().getTime() < expiresAt) {
            return decodedToken
        } else {
            return false
        }
    }
    return false
}

export const serverAuth = req => {
    if (req.headers.cookie) {
        const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt'))

        if (!jwtCookie) return false

        const token = jwtCookie.split('=')[1]
        const verifiedToken = verifyToken(token)

        return verifiedToken
    }
    return false
}

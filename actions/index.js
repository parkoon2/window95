import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3 * 1000
})

const handleError = err => {
    let error = {}

    if (err && err.response && err.response.data) {
        error = err.response.data
    } else {
        error = err
    }

    return Promise.reject(error)
}

const handleSuccess = res => res.data

/** ----------------- Email  ----------------- */
export const fetchContact = body => {
    return axiosInstance
        .post('/contact', body)
        .then(handleSuccess)
        .catch(handleError)
}

/** ----------------- Portfolio  ----------------- */
export const createPortfolio = body => {
    return axiosInstance
        .post('/portfolio', body)
        .then(handleSuccess)
        .catch(handleError)
}
export const updatePortfolio = (id, body) => {
    return axiosInstance
        .patch(`/portfolio/${id}`, body)
        .then(handleSuccess)
        .catch(handleError)
}
export const deletePortfolio = id => {
    return axiosInstance
        .delete(`/portfolio/${id}`)
        .then(handleSuccess)
        .catch(handleError)
}
export const getPortfolios = () => {
    return axiosInstance
        .get('/portfolio')
        .then(handleSuccess)
        .catch(handleError)
}

export const getPortfolioById = id => {
    return axiosInstance
        .get(`/portfolio/${id}`)
        .then(handleSuccess)
        .catch(handleError)
}

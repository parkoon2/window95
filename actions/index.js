import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/api/v1',
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
export const fetchContact = async body => {
    return axiosInstance
        .post('/contact', body)
        .then(handleSuccess)
        .catch(handleError)
}

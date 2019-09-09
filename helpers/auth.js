export const isOwner = () =>
    JSON.parse(localStorage.getItem('user')).role === 'owner'
export const isAuthenticated = () => !!localStorage.getItem('user')

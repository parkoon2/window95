export const dotdotdot = (text, maxLength = 96) => {
    if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`
    }
    return text
}

export const openNewWindow = url => {
    window.open(url, '_blank')
}

export const formatAMPM = date => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    let strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
}

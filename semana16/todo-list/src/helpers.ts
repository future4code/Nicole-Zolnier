
export const formatDate = (date: string): string => {
    const [day, month, year] = date.split('/')
    return `${year}-${month}-${day}`
}

export const checkDate = (date: string): boolean => {
    const userPattern = date.includes('/')

    if (userPattern) {
        return true
    } else {
        return false
    }
}

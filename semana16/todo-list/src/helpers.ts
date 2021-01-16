import { truncate } from "fs"

// transforma a data em DD/MM/YYYY ou em YYYY-MM-DD
export const transformDate = (date: string): string => {
    const userPattern = date.includes('/')

    if(userPattern) {
        const [day, month, year] = date.split('/')
        return `${year}-${month}-${day}`
    } else {
        const [day, month, year] = date.split('-')
        return `${day}/${month}/${year}`
    }
}

export const checkDate = (date: string): boolean => {
    const userPattern = date.includes('/')

    if(userPattern){
        return true
    } else {
        return false
    }
}
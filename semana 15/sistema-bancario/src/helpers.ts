import {users, userAccount} from './users'

export const today : number = new Date().getTime()

export const getTimestamp = (date: string): number => {
    const [day, month, year] = date.split("/")
    
    return new Date(`${year}-${month}-${day}`).getTime()
}

// console.log(today)
export const checkIfAdult = (birthDate: string): boolean => {

    const birthDateTimestamp: number = getTimestamp(birthDate)

    const ageInMilli: number = (today - birthDateTimestamp) / 1000

    const age: number = ageInMilli/(60 * 60 * 24 * 365)

    return age > 18
}

// console.log(checkIfAdult("22/02/2002"))

export const findCpf = (cpf: number): userAccount | undefined => {
    return users.find(account => {
            return account.cpf === cpf
    })
    
}

export const findName = (name: string): userAccount | undefined => {
    return users.find(account => {
            return account.name === name
    })
    
}
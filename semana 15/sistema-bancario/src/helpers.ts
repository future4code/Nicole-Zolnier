import {users, userAccount} from './users'

// hoje em timestamp
export const today : number = new Date().getTime()

// transforma datas no formato DD/MM/YYYY em timestamp
export const getTimestamp = (date: string): number => {
    const [day, month, year] = date.split("/")
    
    return new Date(`${year}-${month}-${day}`).getTime()
}

// verifica se a pessoa tem mais de 18
export const checkIfAdult = (birthDate: string): boolean => {

    const birthDateTimestamp: number = getTimestamp(birthDate)

    const ageInMilli: number = (today - birthDateTimestamp) / 1000

    const age: number = ageInMilli/(60 * 60 * 24 * 365)

    return age > 18
}

// encontra uma conta com base no cpf
export const findCpf = (cpf: number): userAccount | undefined => {
    return users.find(account => {
            return account.cpf === cpf
    })
    
}

// encontra uma conta com base no nome
export const findName = (name: string): userAccount | undefined => {
    return users.find(account => {
            return account.name === name
    })
    
}
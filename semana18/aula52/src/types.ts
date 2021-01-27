export type User = {
    id: string,
    email: string,
    password: string,
    role: ROLE
}

export enum ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type Address = {
    street: string,
    neighborhood: string,
    city:string,
    state: string
}

export type UserAddress = {
    id: string,
    street: string,
    number: number,
    neighborhood: string,
    complement?: string,
    city:string,
    state: string,
    user_id: string 
}
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
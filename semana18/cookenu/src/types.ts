export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    created_at: string,
    creator_id: string
}

export enum ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

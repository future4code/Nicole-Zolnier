export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE
}

export type following = {
    follower_id: string,
    followed_id: string
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

export type mailTemplate = {
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string
}
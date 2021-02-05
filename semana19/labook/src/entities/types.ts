export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }
 
enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export type signupInputDTO = {
    name: string,
    email: string,
    password: string
}

export type postInputDTO = {
    token: string
    photo: string,
    description: string,
    type: string
}
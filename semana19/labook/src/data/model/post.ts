export type postInputDTO = {
    token: string
    photo: string,
    description: string,
    type: string
}

export type postModel = {
    id: string,
    photo: string,
    description: string,
    type: string,
    createdAt: string,
    authorId: string
}
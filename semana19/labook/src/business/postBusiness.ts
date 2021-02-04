import { postInputDTO } from "../entities/types"
import { generateId } from "../services/idGenerator"
import { getTokenData, AuthenticationData } from "../services/authenticator"
import { insertPost, selectPostById } from "../data/postDatabase"

export const businessCreatePost = async (input: postInputDTO): Promise<any> => {
    try {

        const tokenData: AuthenticationData = getTokenData(input.token)

        const id: string = generateId()

        const newPost = {
            id: id,
            photo: input.photo,
            description: input.description,
            type: input.type,
            author_id: tokenData.id
        }

        await insertPost(newPost)

    } catch (error) {
        throw new Error(error.message);
    }

}

export const businessGetPostById = async (id: string) => {
    try {
        let message = "Success!"

        const queryResult: any = await selectPostById(id)

        if (!queryResult) {
            message = "Post not found"
            throw new Error(message)
        }

        const post: any = {
            id: queryResult.id,
            photo: queryResult.photo,
            description: queryResult.description,
            type: queryResult.type,
            createdAt: queryResult.created_at,
            authorId: queryResult.author_id,
        }

        return {message, post}
    } catch (error) {
        throw new Error(error.message);
    }
}
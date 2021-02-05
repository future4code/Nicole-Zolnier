import { post, postInputDTO } from "../entities/types"
import idGenerator from "../services/idGenerator"
import authenticator, {  AuthenticationData } from "../services/authenticator"
import postDatabase from "../data/postDatabase"
import { CustomError } from "../error/CustomError"

class PostBusiness {
    public async businessCreatePost(input: postInputDTO) {
        try {
            const tokenData: AuthenticationData = authenticator.getTokenData(input.token)

            if (!input.photo || !input.type || !input.description){
                throw new CustomError(400, 'Please provide a "photo", a "type" and a "description".')
            }
    
            const id: string = idGenerator.generateId()
    
            const newPost = {
                id: id,
                photo: input.photo,
                description: input.description,
                type: input.type,
                author_id: tokenData.id
            }
    
            await postDatabase.insertPost(newPost)
    
        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message)
        }
    }

    public async businessGetPostById (id: string) {
        try {
            const queryResult: any = await postDatabase.selectPostById(id)
    
            if (!queryResult) {
                throw new CustomError(404, "Post not found");
            }
    
            const post: post = {
                id: queryResult.id,
                photo: queryResult.photo,
                description: queryResult.description,
                type: queryResult.type,
                createdAt: queryResult.created_at,
                authorId: queryResult.author_id,
            }
    
            return post
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new PostBusiness()
import { postInputDTO } from "../model/post"
import idGenerator from "../services/idGenerator"
import authenticator, { AuthenticationData } from "../services/authenticator"
import postDatabase from "../data/postDatabase"
import { CustomError } from "../error/CustomError"
import { Post } from "../entities/post"
import { postModel } from "../model/post"
import dayjs from "dayjs"

class PostBusiness {
    public async businessCreatePost(input: postInputDTO) {
        try {
            const tokenData: AuthenticationData = authenticator.getTokenData(input.token)

            if (!input.photo || !input.type || !input.description) {
                throw new CustomError(400, 'Please provide a "photo", a "type" and a "description".')
            }

            const id: string = idGenerator.generateId()

            const newPost: Post = new Post(id,
                input.photo,
                input.description,
                input.type,
                dayjs().format('YYYY-MM-DD'),
                tokenData.id)


            await postDatabase.insertPost(newPost)

        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message)
        }
    }

    public async businessGetPostById(id: string) {
        try {
            const queryResult: any = await postDatabase.selectPostById(id)

            if (!queryResult) {
                throw new CustomError(404, "Post not found");
            }

            const post: postModel = {
                id: queryResult.id,
                photo: queryResult.photo,
                description: queryResult.description,
                type: queryResult.type,
                createdAt: dayjs(queryResult.created_at).format('DD/MM/YYYY'),
                authorId: queryResult.author_id,
            }

            return post
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new PostBusiness()
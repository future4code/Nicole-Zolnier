import dayjs from "dayjs"
import { Request, Response } from "express"
import { selectRecipeById } from "../data/selectRecipeById"
import { selectUserById } from "../data/selectUserById"
import { getTokenData } from "../services/authenticator"

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)

        if(!token || !getTokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const id: string = req.params.id as string

        const queryData = await selectRecipeById(id)

        if (!queryData) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        const user = await selectUserById(queryData.creator_id)

        const recipe = {
            id: queryData.id,
            title: queryData.title,
            description: queryData.description,
            createdAt: dayjs(queryData.created_at).format('DD/MM/YYYY'),
            creatorId: queryData.creator_id,
            creatorName: user.name
        }

        res.status(200).send({message: recipe})
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
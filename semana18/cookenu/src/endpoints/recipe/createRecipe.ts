import { Request, Response } from 'express'
import { insertRecipe } from '../../data/recipe/insertRecipe'
import { AuthenticationData, getTokenData } from '../../services/authenticator'
import { generateId } from '../../services/idGenerator'
import { recipe } from '../../types'
import { selectUserById } from '../../data/user/selectUserById'
import dayjs from 'dayjs'


export const createRecipe = async (req: Request, res: Response) => {
    const { title, description } = req.body
    const token = req.headers.authorization as string
    const id: string = generateId()
    try {

        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const user = await selectUserById(tokenData.id)

        if (!user) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        if(!title){
            res.statusCode = 422
            throw new Error("Please provide a title for yor recipe") 
        }


        const newRecipe: recipe = {
            id: id,
            title: title,
            description: description || "",
            created_at: dayjs().format('YYYY-MM-DD'),
            creator_id: user.id
        }

        await insertRecipe(newRecipe);

        res.status(201).send({
            message: "Recipe created"
        })


    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}
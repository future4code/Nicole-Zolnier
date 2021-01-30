import { Request, Response } from "express"
import { getTokenData } from "../../services/authenticator"
import { selectAllRecipes } from "../../data/recipe/selectAllRecipes"
import { recipe } from "../../types"

export const getAllRecipes = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string

        getTokenData(token)

        if(!token || !getTokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const queryData = await selectAllRecipes()

        const recipes = queryData.map((item: recipe)=> {
            return {id: item.id, title: item.title, description: item.description}
        })
        

        res.status(200).send({
            recipes: recipes
        })
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
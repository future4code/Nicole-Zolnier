import { Request, Response } from "express"
import { selectUserById } from "../data/selectUserById"
import { getTokenData } from "../services/authentication";

export const getUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)
       
        const id: string = req.params.id as string
        
        const user = await selectUserById(id)

        if (!user) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        res.status(200).send({
                id: user.id,
                email: user.email,
                role: user.role
            })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
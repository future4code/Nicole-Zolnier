import { Request, Response } from "express"
import { selectUserById } from "../data/selectUserById"
import { getTokenData } from "../services/authenticator"

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)

        if(!getTokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const id: string = req.params.id as string

        const user = await selectUserById(id)

        if (!user) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
            })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
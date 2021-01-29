import { Request, Response } from "express"
import { AuthenticationData, getTokenData } from "../services/authenticator"
import { selectUserById } from "../data/selectUserById"

export const getOwnProfile = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        const queryData = await selectUserById(tokenData.id)

        if (!queryData) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        const user = {
            id: queryData.id,
            name: queryData.name,
            email: queryData.email
        }

        res.status(200).send({
            message: user
        })
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
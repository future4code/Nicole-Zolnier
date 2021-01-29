import { Request, Response } from "express"
import { AuthenticationData, getTokenData } from "../services/authenticator"
import { selectUserById } from "../data/selectUserById"

export const getOwnProfile = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        const user = await selectUserById(tokenData.id)

        if (!user) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        res.status(200).send({
            message: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
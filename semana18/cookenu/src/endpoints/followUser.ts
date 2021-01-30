import { Request, Response } from "express"
import { AuthenticationData, getTokenData } from "../services/authenticator"

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }
        
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
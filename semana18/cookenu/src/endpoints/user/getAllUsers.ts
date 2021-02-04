import { Request, Response } from "express"
import { getTokenData } from "../../services/authenticator"
import { selectAllUsers } from "../../data/user/selectAllUsers"
import { user } from "../../types"

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string

        getTokenData(token)

        if(!token || !getTokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const queryData = await selectAllUsers()

        const users = queryData.map((item: user) => {
            return {id: item.id, name: item.name}
        })

        res.status(200).send({
            users: users
        })
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
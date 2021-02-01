import { Request, Response } from "express"
import { getUsersBusiness } from "../business/getUsersBusiness";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string

        const users = await getUsersBusiness(token)
        
        res.status(200).send({users: users})

    } catch (error) {
        res.status(400).send(error.message)
    }
} 
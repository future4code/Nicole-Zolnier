import { Request, Response } from 'express'
import selectByName from '../data/selectByName'
import { user } from '../types/user'

export const getUserByName = async (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const name:string = req.params.name as string

        if(!name) {
            errorCode = 406
            throw new Error("Please provide a name.");
        } else {
            const users: user[] = await selectByName(name)

            if(!users.length) {
                errorCode = 404
                throw new Error("No user found with that name");
            }

            res.status(200).send(users)
        }
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}
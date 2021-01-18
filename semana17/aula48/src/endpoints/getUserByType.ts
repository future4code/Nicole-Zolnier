import { Request, Response } from 'express'
import selectByType from '../data/selectByType'
import { user } from '../types/user'

export const getUserByType = async (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const type:string = req.params.type as string

        if(!type) {
            errorCode = 406
            throw new Error("Please provide a type.");
        } else {
            const users: user[] = await selectByType(type)

            if(!users.length) {
                errorCode = 404
                throw new Error("No user found with that type");
            }

            res.status(200).send(users)
        }
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}
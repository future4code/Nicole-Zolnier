import { Request, Response } from 'express'
import selectByNameType from '../data/selectByNameType'
import { search } from '../types/search'
import { user } from '../types/user'

export const getUserByNameType = async (req:Request, res:Response): Promise<void> => {

    try {
        const searchData: search = {
            name: String(req.query.name).toLowerCase(),
            type: String(req.query.type)
        }
        const validTypes = ['Teacher',  'Operations', 'CX']

        if(!validTypes.includes(searchData.type)){
            throw new Error("Type not valid. You should choose from Teacher, Operations or CX");
        }
        
        if(!searchData) {
            res.statusCode = 406
            throw new Error("Please provide a type and/or a name.");
        } else {
            const users: user[] = await selectByNameType(searchData)

            if(!users.length) {
                res.statusCode = 404
                throw new Error("No user found with that type or name");
            }

            res.status(200).send(users)
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
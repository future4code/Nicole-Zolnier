import { Request, Response } from 'express'
import selectWithAllFilters from '../data/selectWithAllFilters'
import { bigSearch } from '../types/search'
import { user } from '../types/user'

export const specificSearch = async (req: Request, res: Response) => {

    try {
        const searchData: bigSearch = {
            name: String(req.query.name) || '',
            type: String(req.query.type),
            orderBy: String(req.query.orderBy) || 'name',
            orderType: String(req.query.orderType) || 'DESC',
            page: Number(req.query.page) <= 0 ? Number(req.query.page) : 1
        }

        const users: user[] = await selectWithAllFilters(searchData)

        
        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found");   
        } else {
            res.status(200).send(users)
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
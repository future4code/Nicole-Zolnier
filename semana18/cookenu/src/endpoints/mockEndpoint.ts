// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import mockQuery from '../data/mockQuery'


const mockEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        res.statusCode = 422
        const result = await mockQuery()

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default mockEndpoint
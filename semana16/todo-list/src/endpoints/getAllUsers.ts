import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { getAllUsers } from '../data/getAllUsers'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/all', async (req: Request, res: Response) => {
    try {
        const result = await getAllUsers()

        res.status(200).send({ users: result})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
})

export default router
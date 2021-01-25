import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { selectAllUsers } from '../data/selectAllUsers'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/all', async (req: Request, res: Response) => {
    try {
        const result = await selectAllUsers()

        res.status(200).send({ users: result})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
})

export default router
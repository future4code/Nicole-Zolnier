import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { createUser } from '../data/createUser'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.put('/create', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error("Please provide a name, a nickname and an email.")
        } else {
            await createUser(name, nickname, email)
            res.status(201).send("User created!")
        }

        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router;
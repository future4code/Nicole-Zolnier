import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { updateUser } from '../data/updateUser'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/edit/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id: number = Number(req.params.id)
        const { name, nickname } = req.body

        if (!name || !nickname) {
            errorCode = 422
            throw new Error("Please provide a new name and a new nickname")
        } else {
            await updateUser(id, name, nickname)
            res.status(201).send("User edited!")
        }

        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router
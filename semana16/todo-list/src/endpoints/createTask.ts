import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { createTask } from '../data/createTask'
import { checkDate, formatDate } from '../helpers'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.put('/create', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { title, description, dueDate, userId } = req.body
        const checkingDate = checkDate(dueDate)

        if (!title || !description || !dueDate || !userId) {
            errorCode = 422
            throw new Error("Please provide a title, a description, a due date and an userId.")
        }

        if (!checkingDate) {
            errorCode = 406
            throw new Error("Please provide a date in the format DD/MM/YYYY")
        }

        const dateFormat = formatDate(dueDate)
        await createTask(title, description, dateFormat, userId)
        res.status(201).send("Task created!")
    } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router
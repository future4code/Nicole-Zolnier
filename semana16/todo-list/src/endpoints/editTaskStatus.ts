import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { updateTask } from '../data/updateTask'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/status/edit', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        
        const { taskId, status } = req.body

        if (!taskId || !status) {
            errorCode = 422
            throw new Error("Please provide the task id and a new status")
        } else {
            await updateTask(taskId, status)
            res.status(201).send("Task edited!")
        }

        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router
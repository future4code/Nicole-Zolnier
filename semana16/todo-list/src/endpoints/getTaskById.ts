import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { getTaskById } from '../data/getTaskById'
import moment from 'moment'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const id = Number(req.params.id)
  
      const queryResult = await getTaskById(id)

      
  
      if (!queryResult) {
        errorCode = 404
        throw new Error("Task not found")
      } else {
        const result = {
          taskId: queryResult.task_id,
          title: queryResult.title,
          description: queryResult.description,
          dueDate: moment.utc(queryResult.due_date).format('DD/MM/YYYY'),
          status: queryResult.status,
          userId: queryResult.user_id
        }
        res.status(200).send(result)
      }
  
    } catch (error) {
      res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router
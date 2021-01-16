import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { getTaskById } from '../data/getTaskById'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const id = Number(req.params.id)
  
      const result = await getTaskById(id)
  
      if (!result) {
        errorCode = 404
        throw new Error("Task not found")
      } else {
        res.status(200).send(result)
      }
  
    } catch (error) {
      res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router
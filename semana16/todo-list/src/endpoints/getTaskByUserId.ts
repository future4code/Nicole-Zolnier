import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { searchTasks } from '../data/searchTasks'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/search', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.query.userId)

    if (!id) {
      errorCode = 422
      throw new Error("Please insert the nickname query and a value")
    }
    const result = await searchTasks(id)
    if (!result) {
      errorCode = 404
      throw new Error("User or tasks not found")
    }
    res.status(200).send({ tasks: result })
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
})

export default router
import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { searchTasks } from '../data/searchTasks'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/search', async (req: Request, res: Response) => {
    try {
        const result = await searchTasks(req.query.userId as string)
    
        res.status(200).send({tasks: result})
      } catch (err) {
        res.status(400).send({
          message: err.message,
        })
      }
})

export default router
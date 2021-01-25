import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { selectUserById } from '../data/selectUserById'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const result = await selectUserById(id)

    if (!result) {
      errorCode = 404
      throw new Error("User not found")
    } else {
      res.status(200).send(result)
    }

  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
})

export default router;
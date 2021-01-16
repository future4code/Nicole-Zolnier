import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { searchUsers } from '../data/searchUsers'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/search', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nickname = req.query.nickname as string

        if (!nickname) {
            errorCode = 422
            throw new Error("Please insert the nickname query and a value")
        }

        const result = await searchUsers(nickname)

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
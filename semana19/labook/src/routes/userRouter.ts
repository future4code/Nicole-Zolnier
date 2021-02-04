import express from "express"
import { login } from "../controller/userController"

export const userRouter = express.Router()

// userRouter.post('/signup', signup)
userRouter.post('/login', login)

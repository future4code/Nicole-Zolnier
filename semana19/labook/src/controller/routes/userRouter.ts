import express from "express"
import userController from "../userController"

export const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)

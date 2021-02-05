import express from "express"
import { createPost, getPostById } from "../controller/postController"

export const postRouter = express.Router()

postRouter.post('/create', createPost)
postRouter.get('/:id', getPostById)
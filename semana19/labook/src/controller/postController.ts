import { Request, Response } from "express"
import { businessCreatePost, businessGetPostById } from "../business/postBusiness"

import { selectPostById } from "../data/postDatabase"
import { postInputDTO } from "../entities/types"

export const createPost = async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string

      const postData: postInputDTO = {token, photo,description, type}

      await businessCreatePost(postData)

      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}

export const getPostById = async (req: Request, res: Response) => {
   try {

      const { id } = req.params

      const {message, post} = await businessGetPostById(id)
   

      res.status(200).send({ message, post })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}
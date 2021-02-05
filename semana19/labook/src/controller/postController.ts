import { Request, Response } from "express"
import { postInputDTO } from "../entities/types"
import postBusiness from "../business/postBusiness"

class PostController {
   public async createPost(req:Request, res:Response){
      try {
         const { photo, description, type } = req.body
   
         const token: string = req.headers.authorization as string
   
         const postData: postInputDTO = {token, photo,description, type}
   
         await postBusiness.businessCreatePost(postData)
   
         res.status(201).send({ message: "Success!" })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }
   } 
   

   public async getPostById(req:Request, res:Response){
      try {
         const id = req.params.id
   
         const post = await postBusiness.businessGetPostById(id)
   
         res.status(200).send({ message: "Success!", post })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }

   }
}

export default new PostController()
import { Request, Response } from "express"
import { postInputDTO } from "../data/model/post"
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
         res.status(error.statusCode).send(error.sqlMessage || error.message)
      }
   } 
   

   public async getPostById(req:Request, res:Response){
      try {
         const id = req.params.id
   
         const post = await postBusiness.businessGetPostById(id)
   
         res.status(200).send({ message: "Success!", post })
   
      } catch (error) {
         res.status(error.statusCode).send(error.sqlMessage || error.message)
      }

   }
}

export default new PostController()
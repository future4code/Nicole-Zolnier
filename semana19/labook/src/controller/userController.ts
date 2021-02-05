import { Request, Response } from "express"
import { businessLogin, businessSignup } from "../business/userBusiness"
import { signupInputDTO } from "../entities/types"

export const signup = async (req: Request, res: Response) => {
   try {
      const { name, email, password } = req.body

      const userData: signupInputDTO = {
         name,
         email,
         password
      }
      
      const token = await businessSignup(userData)

      res.status(201)
         .send({message: "User created!",token})

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const login = async (req: Request, res: Response) => {
    try {
 
       const { email, password } = req.body
 
       const token = await businessLogin(email, password)

       res.status(200).send({ message: "Sucess!", token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }
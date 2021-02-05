import { Request, Response } from "express"
import userBusiness from "../business/userBusiness"
import { signupInputDTO } from "../entities/types"

class UserController {
   public async signup(req: Request, res: Response) {
      try {
         const { name, email, password } = req.body

         const userData: signupInputDTO = {
            name,
            email,
            password
         }

         const token = await userBusiness.businessSignup(userData)

         res.status(201)
            .send({ message: "User created!", token })

      } catch (error) {
         res.status(400).send(error.message)
      }
   }

   public async login(req: Request, res: Response) {
      try {

         const { email, password } = req.body

         const token = await userBusiness.businessLogin(email, password)

         res.status(200).send({ message: "Sucess!", token })

      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400

         res.send({ message })
      }
   }
}

export default new UserController()
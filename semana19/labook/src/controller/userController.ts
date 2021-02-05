import { Request, Response } from "express"
import userBusiness from "../business/userBusiness"
import { signupInputDTO, loginInputDTO } from "../model/user"

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
         res.status(error.statusCode).send(error.sqlMessage || error.message)
      }
   }

   public async login(req: Request, res: Response) {
      try {

         const { email, password } = req.body

         const data: loginInputDTO = {
            email, 
            password
         }

         const token = await userBusiness.businessLogin(data)

         res.status(200).send({ message: "Sucess!", token })

      } catch (error) {
         res.status(error.statusCode).send(error.sqlMessage || error.message)
      }
   }
}

export default new UserController()
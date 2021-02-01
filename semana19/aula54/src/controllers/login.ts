import { Request, Response } from "express"
import { loginBusiness } from "../business/loginBusiness";

export const login = async (req: Request,res: Response): Promise<void> => {
   try {
      const { email, password } = req.body

      const userInfo = {
         email: email,
         password: password
      }

      const token = await loginBusiness(userInfo)

      res.send({
         message: "User logged in!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
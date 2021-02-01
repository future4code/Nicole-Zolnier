import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";


export const signup = async (req: Request, res: Response) => {
   try {
      const { name, email, password, role } = req.body

      const newUserInfo = {
         name: name,
         email: email,
         password: password,
         role: role || "NORMAL"
     }

      const token = await signupBusiness(newUserInfo)

      res.status(201).send({
         message: "User created",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
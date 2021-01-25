import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/generateToken";

export const login = async (req:Request, res:Response) => {
    const { email, password } = req.body
    try {
        if(!email || email.indexOf("@") === -1){
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if(!password || password.length < 6){
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }

        const newUser = {
            email: email,
            password: password
        }

        const user = await selectUserByEmail(newUser.email);

        if(!user){
            res.statusCode = 404
            throw new Error("User not found");
        }

        if (user.password !== newUser.password) {
            res.statusCode = 401
            throw new Error("Invalid password");
        }

        const token = generateToken({
            id: user.id,
        });
      
          res.status(200).send({
            token,
          })

        
    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}
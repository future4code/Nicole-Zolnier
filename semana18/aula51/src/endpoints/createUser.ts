import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/authentication";
import { User } from "../types";


export const createUser = async (req:Request, res:Response) => {
    const { email, password } = req.body
    try {
        const id: string = generateId()

        if(!email || email.indexOf("@") === -1){
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if(!password || password.length < 6){
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }


        const newUser: User = {
            id: id,
            email: email,
            password: password
        }

        await insertUser(newUser);

        const token = generateToken({
            id,
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
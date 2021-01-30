import { Request, Response } from "express"
import { insertUser } from "../../data/user/insertUser"
import { generateToken } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"
import { generateHash } from "../../services/hashManager";
import { user } from "../../types";
import { verifyEmail } from "../../services/validators";


export const signUp = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body
    try {
        const id: string = generateId()

        if(!name){
            res.statusCode = 422
            throw new Error("Please provide a name") 
        }

        if (!email) {
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        verifyEmail(email)
        
        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }


        const passwordHash: string = await generateHash(password)

        const newUser: user = {
            id: id,
            name: name,
            email: email,
            password: passwordHash,
            role: role || "NORMAL"
        }

        await insertUser(newUser);

        const token = generateToken(id, newUser.role)

        res.status(201).send({
            token,
        })


    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}
import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/authentication";
import { User, UserAddress } from "../types";
import { hash } from "../services/hashManager";
import { getAddressByCep } from "../services/addressManager";
import { insertAddress } from "../data/inserAddress";


export const createUser = async (req: Request, res: Response) => {
    const { email, password, role, cep, houseNumber, complement } = req.body
    try {
        const id: string = generateId()
        const addressId: string = generateId()

        if(!cep){
            res.statusCode = 422
            throw new Error("Please provide a CEP, only numbers.")
        }

        if(!houseNumber){
            res.statusCode = 422
            throw new Error("Please provide a house number")
        }

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }


        const passwordHash: string = await hash(password)

        const newUser: User = {
            id: id,
            email: email,
            password: passwordHash,
            role: role || 'NORMAL'
        }

        const addressData = await getAddressByCep(cep as string)

        const newAddress: UserAddress = {
            id: addressId,
            street: addressData.street,
            number: houseNumber,
            neighborhood: addressData.neighborhood,
            complement: complement,
            city: addressData.city,
            state: addressData.state,
            user_id: id 
        }

        await insertUser(newUser);
        await insertAddress(newAddress)

        const token = generateToken({
            id,
            role
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
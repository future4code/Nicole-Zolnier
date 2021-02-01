import { Request, Response } from "express"
import { deleteUserBusiness } from "../business/deleteUserBusiness"

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string
        const id: string = req.params.id as string

        const requestData = {
            token: token,
            id: id
        }

        await deleteUserBusiness(requestData)
        
        res.status(200).send({
            message: "User deleted"
        })

    } catch (error) {
        res.status(400).send(error.message)
    }
}
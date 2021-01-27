import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authentication";

export const getUserByToken = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)


        if (tokenData.role !== "NORMAL") {
            res.statusCode = 401
            throw new Error("Only a normal user can access this endpoint")
        }

        const user = await selectUserById(tokenData.id)

        if (!user) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        res.status(200).send({
            message: {
                id: user.id,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
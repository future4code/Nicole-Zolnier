import { Request, Response } from "express"
import { AuthenticationData, getTokenData } from "../services/authentication"
import { delUser } from "../data/delUser";

export const deleteUser = async (req: Request, res: Response) => {
    
    try {
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if (tokenData.role !== "ADMIN") {
            res.statusCode = 401
            throw new Error("Only an admin user can access this endpoint")
        }

        await delUser(id)

        res.status(200).send("User deleted")

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}
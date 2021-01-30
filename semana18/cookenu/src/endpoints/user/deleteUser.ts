import { Request, Response } from "express"
import { AuthenticationData, getTokenData } from "../../services/authenticator"
import { delUser } from "../../data/user/delUser";
import { selectUserById } from "../../data/user/selectUserById";

export const deleteUser = async (req: Request, res: Response) => {
    const id: string = req.params.id as string
    try {
        if (!id) {
            res.statusCode = 422
            throw new Error('Missing params')
        }

        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if (tokenData.role !== "ADMIN") {
            res.statusCode = 401
            throw new Error('Only an admin user can access this endpoint')
        }

        

        const userToBeDeleted = selectUserById(id)

        if (!userToBeDeleted) {
            res.statusCode = 404
            throw new Error("User not found")
        } else {
            await delUser(id)
            res.status(200).send({ message: "User deleted" })
        }



    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}
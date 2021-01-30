import { Request, Response } from "express"
import { selectUserById } from "../../data/user/selectUserById"
import { getTokenData } from "../../services/authenticator"

export const getUserProfile = async (req: Request, res: Response) => {
    const id: string = req.params.id as string
    try {
        if (!id) {
            res.statusCode = 422
            throw new Error('Missing params')
        }

        const token = req.headers.authorization as string

        getTokenData(token)

        if(!token || !getTokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        
        const queryData = await selectUserById(id)

        if (!queryData) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        const user = {
            id: queryData.id,
            name: queryData.name,
            email: queryData.email
        }

        res.status(200).send({
            user: user
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
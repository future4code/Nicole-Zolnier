import { Request, Response } from "express"
import { selectUserById } from "../../data/user/selectUserById"
import { insertFollow } from "../../data/user/insertFollow"
import { AuthenticationData, getTokenData } from "../../services/authenticator"
import { following } from "../../types"

export const followUser = async (req: Request, res: Response) => {
    const userToFollowId = req.body.userToFollowId as string

    try {
        if (!userToFollowId) {
            res.statusCode = 422
            throw new Error('Missing params')
        }

        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }
             
        const followerData = await selectUserById(tokenData.id)
        const userToFollowData = await selectUserById(userToFollowId)

        if(!followerData || !userToFollowData){
            res.statusCode = 404
            throw new Error ('User/s not found.')
        } else {
            const newFollow: following = {
                follower_id: tokenData.id,
                followed_id: userToFollowId
            }

            await insertFollow(newFollow)
            res.status(201).send({
                message: "User followed!"
            })
        }
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
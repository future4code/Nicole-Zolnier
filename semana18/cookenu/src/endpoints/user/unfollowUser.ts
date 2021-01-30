import { Request, Response } from "express"
import { selectUserById } from "../../data/user/selectUserById"
import { delFollow } from "../../data/user/delFollow"
import { AuthenticationData, getTokenData } from "../../services/authenticator"
import { following } from "../../types"

export const unfollowUser = async (req: Request, res: Response) => {
    const userToUnfollowId = req.body.userToUnfollowId as string

    try {
        if (!userToUnfollowId) {
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
        const userToFollowData = await selectUserById(userToUnfollowId)

        if(!followerData || !userToFollowData){
            res.statusCode = 404
            throw new Error ('User/s not found.')
        } else {
            const newFollow: following = {
                follower_id: tokenData.id,
                followed_id: userToUnfollowId
            }

            await delFollow(newFollow)
            res.status(201).send({
                message: "User unfollowed!"
            })
        }
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 
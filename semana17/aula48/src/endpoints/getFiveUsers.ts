import { Request, Response } from 'express'
import selectFiveUsers from '../data/selectFiveUsers'

export const getFiveUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectFiveUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       res.send(error.message || error.sqlMessage)
    }
 }
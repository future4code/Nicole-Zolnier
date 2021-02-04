import { following } from "../../types";
import { connection } from "../connection/connection"

export const delFollow = async (newUnfollow: following):Promise<void> => {
    try {
        await connection('Following')
        .where(newUnfollow)
        .delete()
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}
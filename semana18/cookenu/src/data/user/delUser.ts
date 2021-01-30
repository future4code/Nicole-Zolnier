import { connection } from "../connection/connection";

export const delUser = async (id: string) => {
    try {
        await connection('Following')
            .where('follower_id', id)
            .delete()
            await connection('Following')
            .where('followed_id', id)
            .delete()
        await connection('Recipes')
            .where('creator_id', id)
            .delete()
        await connection('Users')
            .where({ id })
            .delete()
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
} 
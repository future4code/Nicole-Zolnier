import { connection } from './connection'

export const selectAllUsers = async () => {
    try {
        const result = await connection("Users")
            .select("user_id", "nickname")
            
        return result
        
    } catch (error) {
        return []
    }
}
import { connection } from "./connection"

export const searchTasks = async (id: number): Promise<any> => {
    try {
        const result = await connection
            .raw(`
                SELECT * FROM Tasks
                WHERE user_id LIKE "${id}"
                `)
        return result[0]
        
    } catch (error) {
        console.log(error)
        return []
    }
}
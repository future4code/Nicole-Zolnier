// Database connection
import { connection } from './connection/connection'

const mockQuery = async(): Promise<any> => {
    try {
        const result = await connection.raw(``)

        return result[0]
        
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default mockQuery
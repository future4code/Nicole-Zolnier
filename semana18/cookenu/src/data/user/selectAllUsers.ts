import { connection } from "../connection/connection"

export const selectAllUsers = async(): Promise<any> => {
    try {
        const result = await connection('Users')
      .select("*")

    return result
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
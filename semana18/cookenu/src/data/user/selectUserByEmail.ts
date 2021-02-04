import { connection } from "../connection/connection"

export const selectUserByEmail = async(email: string): Promise<any> => {
    try {
        const result = await connection('Users')
      .select("*")
      .where({ email })

    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
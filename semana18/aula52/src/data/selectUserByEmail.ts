import { connection } from "./connection";

export const selectUserByEmail = async(email: string): Promise<any> => {
    try {
        const result = await connection("Users_Aula50")
      .select("*")
      .where({ email })
 
    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}

import { connection } from "./connection";

export const selectUserById = async(id: string): Promise<any> => {
    try {
        const result = await connection("Users_Aula50")
      .select("*")
      .where({ id })
 
    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
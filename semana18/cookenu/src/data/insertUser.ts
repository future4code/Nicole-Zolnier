import { user } from "../types";
import { connection } from "./connection/connection"



export const insertUser = async (newUser: user) => {
    try {
      await connection(('Users_Aula50'))
        .insert(newUser)
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
}

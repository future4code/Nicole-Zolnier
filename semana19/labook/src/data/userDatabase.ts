import { connection } from "./connection";

export const insertUser = async () => {
    try {
      await connection('labook_users')
        .insert()
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
}

export const selectUserByEmail = async (email: string) => {
    try {
        await connection('labook_users')
         .select("*")
         .where({ email })
      } catch (error) {
        throw new Error(error.sqlMessage);
      }
}


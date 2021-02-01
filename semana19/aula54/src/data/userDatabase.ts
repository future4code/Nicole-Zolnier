import { connection } from "./connection"
import { user } from "../business/entities/user";

export const insertUser = async (user: user) => {
   try {
      await connection('users_aula54')
         .insert(user)
   } catch (error) {
      throw new Error(error.message || error.sqlMessage);
   }
}

export const selectUserByEmail = async (email: string): Promise<user> => {
   try {
      const result = await connection('users_aula54')
         .select("*")
         .where({ email })

      return result[0]

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}

export const selectAllUsers = async (): Promise<any> => {
   try {
      return await connection('users_aula54')
         .select('*')

   } catch (error) {
      throw new Error(error.message || error.sqlMessage);
   }
}

export const deleteUser = async (id: string): Promise<any> => {
   try {
      await connection('users_aula54')
         .where({ id })
         .del()

   } catch (error) {
      throw new Error(error.message || error.sqlMessage);
   }
}

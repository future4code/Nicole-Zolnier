import { User } from "../types";
import { connection } from "./connection";

export const insertUser = async (newUser: User) => {
  try {
    await connection(('Users_Aula50'))
      .insert(newUser)
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
}
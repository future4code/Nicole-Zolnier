import { user } from "../entities/types";
import { connection } from "./connection";

export const insertUser = async (user: user) => {
  try {
    await connection('labook_users')
      .insert(user)
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
}

export const selectUserByEmail = async (email: string) => {
  try {
    const result = await connection('labook_users')
      .select("*")
      .where({ email })

    return result[0]

  } catch (error) {
    throw new Error(error.sqlMessage);
  }
}


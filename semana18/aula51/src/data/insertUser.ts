import { User } from "../types";
import { connection } from "./connection";

export const insertUser = async (newUser: User) => {
    await connection(('Users_Aula50'))
      .insert(newUser)
}
import { connection } from "./connection";

export const insertUser = async (id: string, email: string, password: string) => {
    await connection(('Users_Aula50'))
      .insert({
        id,
        email,
        password,
      })
}
import { connection } from "./connection/connection";

export const delUser = async (id: string) => {
    try {
        await connection('Users_Aula50')
            .where({ id })
            .delete()
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
} 
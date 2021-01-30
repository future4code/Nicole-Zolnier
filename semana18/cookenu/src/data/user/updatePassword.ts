import { connection } from "../connection/connection"

export const updatePassword = async (email: number, password: string) => {
    try {
        await connection('Users')
        .where({ email })
        .update({
            password: password
        })
    } catch (error) {
        console.log(error)
    }
}
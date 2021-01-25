import { connection } from "./connection"

export const searchUsers = async (nickname: string): Promise<any> => {
    try {
        const result = await connection('Users')
            .where('nickname', nickname)

        return result[0]
    } catch (error) {
        console.log(error)
        return []
    }
}
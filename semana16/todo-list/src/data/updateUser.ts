import { connection } from './connection'

export const updateUser = async (id: number, name: string, nickname: string) => {
    try {
        await connection('Users')
        .where('user_id', id)
        .update({
            name: name,
            nickname: nickname
        })
    } catch (error) {
        console.log(error)
    }
}
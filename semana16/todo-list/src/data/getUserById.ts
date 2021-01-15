import { connection } from './connection'

export const getUserById = async (id: number): Promise<any> => {
  try {
    const result = await connection('Users')
      .where('user_id', id)
    return result[0]
  } catch (error) {
    console.log(error)
  }
}

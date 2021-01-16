import { connection } from './connection'

export const getTaskById = async (id: number): Promise<any> => {
    try {
      const result = await connection('Tasks')
        .where('task_id', id)
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }
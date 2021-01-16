import { connection } from './connection'

export const selectTaskById = async (id: number) => {
  try {
    const result = await connection('Tasks')
      .where('task_id', id)
    
    return result[0]
  } catch (error) {
    console.log(error)
  }
}

import {connection} from './connection'

export const createTask = async (
    title: string, description: string, dueDate: string, userId: number
  ) => {
    await connection
      .insert({
        title: title, 
        description: description,
        due_date: dueDate,
        user_id: userId
      })
      .into("Tasks")
  }
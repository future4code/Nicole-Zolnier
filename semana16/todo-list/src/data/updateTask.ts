import { connection } from './connection'

export const updateTask = async (id: number, status: string ) => {
    try {
        await connection('Tasks')
        .where('task_id', id)
        .update({
            status: status
        })
    } catch (error) {
        console.log(error)
    }
}
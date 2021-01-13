import { connection } from './index'

export const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0]
}

export const getActorByName = async (name: string): Promise<any> => {
    try {
        const result = await connection
            .raw(`
                SELECT * FROM Actor
                WHERE name LIKE "%${name}%"
                `)
        return result[0]
    } catch (error) {
        console.log(error)
        return []
    }
}

export const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)

    return result[0]
}

export const updateSalary = async (id: string, newSalary: number): Promise<void> => {
    await connection('Actor')
        .where('id', '=', `${id}`)
        .update({
            salary: newSalary
        })
}

export const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)
}

export const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender })
  
    return result[0].average
}
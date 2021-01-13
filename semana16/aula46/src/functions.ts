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
import { connection } from "../connection/connection"

export const selectRecipeById = async(id: string): Promise<any> => {
    try {
        const result = await connection('Recipes')
      .select("*")
      .where({ id })

    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
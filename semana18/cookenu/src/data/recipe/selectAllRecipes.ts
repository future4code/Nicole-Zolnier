import { connection } from "../connection/connection"

export const selectAllRecipes = async(): Promise<any> => {
    try {
        const result = await connection('Recipes')
      .select("*")
      .orderBy('created_at', 'desc')
    return result
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
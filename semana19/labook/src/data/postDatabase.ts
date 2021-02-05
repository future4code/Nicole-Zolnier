import { connection } from "./connection";

export const insertPost = async (post: any) => {
    try {
      await connection('labook_posts')
        .insert(post)
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
}

export const selectPostById = async (id: string) => {
    try {
        const result = await connection('labook_posts')
         .select("*")
         .where({ id })

        return result[0]
      } catch (error) {
        throw new Error(error.sqlMessage);
      }
}
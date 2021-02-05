import BaseDatabase from "./baseDatabase";

class PostDatabase extends BaseDatabase {
  private static tableName: string = 'labook_posts'

  public async insertPost(post: any) {
    try {
      await BaseDatabase.connection(PostDatabase.tableName)
        .insert(post)
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }

  public async selectPostById(id: string) {
    try {
      const result = await BaseDatabase.connection(PostDatabase.tableName)
        .select("*")
        .where({ id })

      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }
}

export default new PostDatabase()
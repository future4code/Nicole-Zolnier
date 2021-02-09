import { Post } from "../business/entities/post";
import BaseDatabase from "./baseDatabase";

class PostDatabase extends BaseDatabase {
  private static tableName: string = 'labook_posts'

  public async insertPost(post: Post) {
    try {
      await BaseDatabase.connection(PostDatabase.tableName)
        .insert({
          id: post.getId(),
          photo: post.getPhoto(),
          description: post.getDescription(),
          type: post.getType(),
          created_at: post.getCreatedAt(),
          author_id: post.getAuthorId()
      })
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }

  public async selectPostById(id: string) {
    try {
      const result = await BaseDatabase.connection(PostDatabase.tableName)
        .select("*")
        .where({ id })

        return new Post(
          result[0].id,
          result[0].photo,
          result[0].description,
          result[0].type,
          result[0].created_at,
          result[0].author_id
        )
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }
}

export default new PostDatabase()
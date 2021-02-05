import { user } from "../entities/types";
import BaseDatabase from "./baseDatabase";

class UserDatabase extends BaseDatabase {
  private static tableName: string = 'labook_users'
  public async insertUser(user: user) {
    try {
      await BaseDatabase.connection(UserDatabase.tableName)
        .insert(user)
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }

  public async selectUserByEmail(email: string) {
    try {
      const result = await BaseDatabase.connection(UserDatabase.tableName)
        .select("*")
        .where({ email })

      return result[0]

    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }
}

export default new UserDatabase()
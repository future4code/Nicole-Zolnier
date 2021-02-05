import { User } from "../entities/user";
import BaseDatabase from "./baseDatabase";

class UserDatabase extends BaseDatabase {
  private static tableName: string = 'labook_users'
  public async insertUser(user: User): Promise<void> {
    try {
      await BaseDatabase.connection(UserDatabase.tableName)
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword()
        })
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }

  public async selectUserByEmail(email: string): Promise<User | null> {
    try {
      const result = await BaseDatabase.connection(UserDatabase.tableName)
        .select("*")
        .where({ email })

      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password
      )

    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }
}

export default new UserDatabase()
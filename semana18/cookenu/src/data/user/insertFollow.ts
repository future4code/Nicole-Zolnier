import { following } from "../../types";
import { connection } from "../connection/connection"

export const insertFollow = async (newFollowing: following) => {
    try {
      await connection(('Following'))
        .insert(newFollowing)
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
}

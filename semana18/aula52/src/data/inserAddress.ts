import { UserAddress } from "../types";
import { connection } from "./connection";

export const insertAddress = async (newAddress: UserAddress) => {
  try {
    await connection(('Users_Address'))
      .insert(newAddress)
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
}
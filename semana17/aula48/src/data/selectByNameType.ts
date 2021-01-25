import { search } from "../types/search";
import { connection } from "./connection";

export default async function selectByNameType(data: search):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${data.name}%" 
      OR type LIKE "%${data.type}%"
    
   `)

   return result[0]
}
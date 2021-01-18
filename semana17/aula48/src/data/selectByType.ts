import { connection } from "./connection";

export default async function selectByType(type: string):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%";
   `)
   
   return result[0]
}
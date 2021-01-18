import { connection } from "./connection";


export default async function selectByName(name: string):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%"
   `)

   return result[0]
}
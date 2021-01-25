import { bigSearch } from "../types/search"
import { connection } from "./connection"

export default async function selectWithAllFilters(data: bigSearch): Promise<any> => {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE name LIKE "%${data.name}%" 
       OR type LIKE "%${data.type}%"
       ORDER BY ${data.order}
       LIMIT 5 
       OFFSET ${data.page};
    `)
 
    return result[0]
 }
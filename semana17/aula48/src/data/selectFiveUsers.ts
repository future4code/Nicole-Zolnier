import { connection } from "./connection";

export default async function selectFiveUsers(): Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    LIMIT 5 
    OFFSET 10
    `)

    return result[0]

}
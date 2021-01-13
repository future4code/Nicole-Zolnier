import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { averageSalary, countActors, deleteActor, getActorById, getActorByName, updateSalary } from './functions'

/**************************************************************/

dotenv.config();

/**************************************************************/

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());


// get by id
app.get('/actors/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string
    const result = await getActorById(id)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

// get by gender
app.get('/actors', async (req: Request, res: Response) => {

  try {
    const gender: string = req.query.gender as string
    const result = await countActors(gender)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})


// get by name
app.get('/actors/', async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const name: string = req.query.name as string
    const result = await getActorByName(name)
    if (!result.length) {
      errorCode = 404
      throw new Error("Ator não encontrado")
    }
    res.status(200).send(result)
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// update salary
app.put('/actors/update', async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { id, newSalary } = req.body

    if (!id || !newSalary) {
      errorCode = 406
      throw new Error("Preencha os campos")
    }

    updateSalary(id, newSalary)

    res.status(201).send("Salário atualizado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// delete actor
app.delete('/actors/delete/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id as string
  try {
    deleteActor(id)
    res.status(200).send("Ator deletado")
  } catch (error) {
    res.status(400).send(error.message)
  }
})


// average salary
app.get('/actors/average/salary/:gender', async (req:Request, res: Response) => {
  try {
      const gender: string = req.params.gender as string
      const result = await averageSalary(gender)

      res.status(200).send(result)
  } catch (error) {
      res.status(400).send(error.message)
  }
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}
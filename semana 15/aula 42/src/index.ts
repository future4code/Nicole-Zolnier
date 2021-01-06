import express, { Request, Response } from 'express'
import cors from 'cors'
import {countries, country} from './countries'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map((country) => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send({result})
})

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
       country => country.id === Number(req.params.id)
    )
 
    if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("País não encontrado")
     }
 })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });
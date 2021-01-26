import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app = express()
app.use(express.json())
app.use(cors())

// endpoint 1 - all countries
app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map((country) => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send({ result })
})

// endpoint 4 - edit country
app.put("/countries/edit/:id", (req: Request, res: Response) => {
    const result = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );
  
    countries[result].name = req.body.name;
    countries[result].capital = req.body.capital;
  
    if (result) {
      res.status(200).send("País alterado com sucesso!");
    } else {
      res.status(404).send("País não encontrado");
    }
  });

// endpoint 2 - get country by id
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

// endpoint 3 - search by name, capital, continent
app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] = countries

    if (!req.query.name && !req.query.capital && !req.query.continent) {
        res.status(404).send("Coloque um parametro (name, capital ou continent)")
    }
    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(String(req.query.name))
        )
    }
    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(String(req.query.capital))
        )
    }
    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(String(req.query.continent))
        )
    }

    if (result.length !== 0) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Pais não encontrado")
    }

})



// endpoint 5 - delete country
app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }

        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        countries.splice(countryIndex, 1)
        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }
})

//  endpoint 6 - create country
app.post("countries/create", (req: Request, res: Response) => {
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
import { users, user } from './users'

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

// ex 1 - endpoint que retorna todos os endpoints
// a) metodo GET
// b) a entidade é o users

app.get("/user/all", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const result = users
        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});

// ex 2 - endpoint pesquisar por type
// a) passei por queryparams pq o bruno disse que a bianca disse que o professor disse que era o melhor a se fazer
// b) sim

app.get("/user/", (req: Request, res: Response) => {
    let errorCode = 400
    const validQueries = ["ADMIN", "NORMAL"]

    try {
        if (!Object.keys(req.query).length) {
            throw new Error("Não encontrei nada, coloca um query aí!")
        }

        const searchQuery: string = (req.query.type as string).toUpperCase()

        if(!validQueries.includes(searchQuery)){
            errorCode = 422
            throw new Error("Query inválido.")
        }

        const result: user[] = users.filter((user) => {
            return user.type.toUpperCase() === searchQuery
        })

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }

});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  

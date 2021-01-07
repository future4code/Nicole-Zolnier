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
        // setando o resultado como o array
        const result: user[] = users

        // deu boa
        res.status(200).send(result);

    } catch (error) {
        // deu ruim
        res.status(errorCode).send(error.message);
    }

});

// ex 2 - endpoint pesquisar por type
// a) passei por queryparams pq o bruno disse que a bianca disse que o professor disse que era o melhor a se fazer
// b) sim

app.get("/user/search", (req: Request, res: Response) => {
    let errorCode: number = 400
    const validOnes = ["ADMIN", "NORMAL"]

    try {
        // colocando a query pra uppercase
        const searchQuery: string = (req.query.type as string).toUpperCase()

        // se a query não ficar igual as validas joga um erro
        if(!validOnes.includes(searchQuery)){
            throw new Error("Query inválido.")
        }

        // o filtro de query em si
        const result: user[] = users.filter((user) => {
            return user.type.toUpperCase() === searchQuery
        })

        // deu boaaaaaaaaa
        res.status(200).send(result)

    } catch (error) {
        // deu ruim
        res.status(errorCode).send(error.message)
    }

});

// ex 3 - endpoint pesquisa por nome
// a) query params
// b) ok
app.get("/user/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        // salvando a query
        const name: string = req.query.nome as string

        // se nao tiver query joga um erro
        if (!name) {
            errorCode = 422;
            throw new Error("Nome inválido.")
        }

        // a busca pelo nome em si
        const myUser = users.find(((u: user) => u.name.toLowerCase() === name.toLowerCase()))

        // se nao achar o usuario, manda um erro
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado")
        }

        // resultado é o usuario
        const result = myUser;
        // deu boaa
        res.status(200).send(result)

    } catch (error) {
        // deu ruim
        res.status(errorCode).send(error.message)
    }

})

// ex 4 - endpoint de criar
// a) ele alterou meu usuario :(
// b) não, porque ele edita usuarios em vez de criar

app.post("/user", (req: Request, res: Response)=>{
    let errorCode: number = 400;

    try {
        // o objetinho do usuario com o body
        const newUser: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        // se tiver faltando alguma coisa no objeto joga um erro
        if(!newUser.age || !newUser.email || !newUser.type || !newUser.name){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        // adiciona o novo user no array de users
        users.push(newUser);
    
        // deu boaa
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        // deu ruim
        res.status(errorCode).send({message: error.message});
    }

})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  

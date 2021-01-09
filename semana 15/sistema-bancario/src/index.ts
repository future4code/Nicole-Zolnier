import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { users, userAccount, transaction } from './users'
import { today, checkIfAdult, findCpf, getTimestamp } from './helpers'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/account/create", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        
        const newUser: userAccount = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
            statement: []
        }

        if (!newUser.name || !newUser.cpf || !newUser.birthDate) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        if(!getTimestamp(req.body.birthDate)){
            errorCode = 422
            throw new Error("Formato errado. Por favor siga o formato DD/MM/YYYY")
        } 
        
        const canOpenAccount: boolean = checkIfAdult(req.body.birthDate)
    
        if(!canOpenAccount) {
            errorCode = 401
            throw new Error("Você precisa ter 18 ou mais de 18 para criar uma conta")
        }

        const existingAccount : userAccount | undefined = findCpf(newUser.cpf)

        if(existingAccount){
            errorCode = 409
            throw new Error("Já existe uma conta com esse CPF")
        }

        users.push(newUser)

        res.status(201).send({ message: "Conta criada! Seu atual saldo é 0, para depositos, use outro endpoint" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

app.post("/account/pay", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if (!req.body.cpf || !req.body.amount) {
            errorCode = 422
            throw new Error("Algum campo está inválido, por favor informe CPF e valor.")
        }
    
        const existingAccount: userAccount | undefined = findCpf(req.body.cpf)

        if(!existingAccount){
            errorCode = 404
            throw new Error("Conta não encontrada")
        } else if(existingAccount.balance < Number(req.body.amount)) {
            throw new Error("Saldo insuficiente") 
        } else {
            let date: any = req.body.date

            if(!date){
                date = today
            } else if(!getTimestamp(date)){
                throw new Error("Formato errado. Por favor siga o formato DD/MM/YYYY")
            } else {
                date = getTimestamp(date)
                if(date < today){
                    throw new Error("Essa data já passou.")
                }
            }

            const newPayment = {
                amount: -req.body.amount,
                date: date,
                description: req.body.description || ""
            }

            existingAccount.balance -= req.body.amount
            existingAccount.statement.push(newPayment)

            res.status(202).send("Pagamento agendado com sucesso!")
        }
    
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

app.put("/account/deposit", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if(!req.body.name || !req.body.cpf || !req.body.amount) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        const existingAccount: userAccount | undefined = findCpf(req.body.cpf)

        if(!existingAccount){
            errorCode = 404
            throw new Error("Conta não encontrada")
        } else {
            const newTransaction: transaction = { 
                amount: Number(req.body.amount),
                date: Date.now(),
                description: "Depósito de Dinheiro"
            }

            existingAccount.balance += req.body.amount
            existingAccount.statement.push(newTransaction)

            res.status(202).send("Deposito feito com sucesso!")
        }
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/account/search", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const cpf: number = Number(req.query.cpf)
        if(!cpf) {
            throw new Error("Insira um CPF válido")
        }

        const checkingCpf: userAccount | undefined = findCpf(cpf)

        if(!checkingCpf) {
            errorCode = 404
            throw new Error("Conta não encontrada")
        } else {
            const result = checkingCpf.balance

            res.status(200).send({balance: result})
        }
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

})

app.get("/account/all", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const result: userAccount[] = users

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }

})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
  })
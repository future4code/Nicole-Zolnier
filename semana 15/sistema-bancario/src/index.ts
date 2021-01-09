import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { users, userAccount, transaction } from './users'
import { today, checkIfAdult, findCpf, getTimestamp, findName } from './helpers'

const app: Express = express();

app.use(express.json());
app.use(cors());

// criar uma conta
app.post("/account/create", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        // se estiver sem algum dos itens no body, retorna erro
        if (!req.body.name || !req.body.cpf || !req.body.birthDate) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        // se não rolar o timestamp com o aniversário, retorna erro
        if (!getTimestamp(req.body.birthDate)) {
            errorCode = 422
            throw new Error("Formato errado. Por favor siga o formato DD/MM/YYYY")
        }

        // funcao que verifica se o usuario tem mais de 18
        const canOpenAccount: boolean = checkIfAdult(req.body.birthDate)

        // se ele não tem, retorna erro
        if (!canOpenAccount) {
            errorCode = 401
            throw new Error("Você precisa ter 18 ou mais de 18 para criar uma conta")
        }

        // verificar se já nao existe uma conta com esse cpf ou nome
        const existingCpf: userAccount | undefined = findCpf(req.body.cpf)
        const existingName: userAccount | undefined = findName(req.body.name)

        // se tiver.... retorna erro
        if (existingCpf) {
            errorCode = 409
            throw new Error("Já existe uma conta com esse CPF")
        }

        if (existingName) {
            errorCode = 409
            throw new Error("Já existe uma conta com esse nome")
        }

        // objetinho do usuario
        const newUser: userAccount = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
            statement: []
        }

        // adiciona o objeto no array
        users.push(newUser)

        // deu boa
        res.status(201).send({ message: "Conta criada! Seu atual saldo é 0, para depositos, use o endpoint /deposit" })

    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send({ message: error.message })
    }
})

// pagar conta
app.post("/account/pay", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        // se não tiver cpf ou valor, retorna erro
        if (!req.body.cpf || !Number(req.body.amount)) {
            errorCode = 422
            throw new Error("Algum campo está inválido, por favor informe CPF e valor.")
        }

        // verifica o cpf
        const existingAccount: userAccount | undefined = findCpf(req.body.cpf)

        // se não achar o cpf ou se não tiver dindin, retorna erro
        if (!existingAccount) {
            errorCode = 404
            throw new Error("Conta não encontrada")
        } else if (existingAccount.balance < Number(req.body.amount)) {
            throw new Error("Saldo insuficiente")
        } else {
            // aqui dá boa
            let date: any = req.body.date

            // analise da data, se não tiver é hoje, se tiver e não rolar tá errado, se antes que hoje, da erro tbm
            if (!date) {
                date = today
            } else if (!getTimestamp(date)) {
                throw new Error("Formato errado. Por favor siga o formato DD/MM/YYYY")
            } else {
                date = getTimestamp(date)
                if (date < today) {
                    throw new Error("Essa data já passou.")
                }
            }

            // objeto do pagamento
            const newPayment: transaction = {
                amount: -Number(req.body.amount),
                date: date,
                description: req.body.description || ""
            }

            // adicionando o novo pagamento no array
            existingAccount.statement.push(newPayment)

            // deu boa
            res.status(202).send("Pagamento agendado com sucesso!")
        }

    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send({ message: error.message })
    }
})

// transferir para outra conta
app.post("/account/transfer", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        // se estiver faltando algum dado, retorna erro
        if (!req.body.senderCpf || !req.body.senderName || !req.body.recipientCpf || !req.body.recipientName || !req.body.amount) {
            errorCode = 422
            throw new Error("Algum campo está inválido, por favor informe CPF e valor.")
        }

        // verificar nome e cpf de ambas pessoas
        const senderAccount: userAccount | undefined = findCpf(req.body.senderCpf)
        const recipientAccount: userAccount | undefined = findCpf(req.body.recipientCpf)
        const senderName: userAccount | undefined = findName(req.body.senderName)
        const recipientName: userAccount | undefined = findName(req.body.senderName)

        // se não achar o nome do remetente ou destinatario dá ruim
        if (!senderName) {
            errorCode = 404
            throw new Error("Conta do rementente não encontrada, verifique o nome")
        }

        if (!recipientName) {
            errorCode = 404
            throw new Error("Conta do destinatário não encontrada, verifique o nome")
        }

        // se não achar os cpf tbm dá ruim e se não tiver saldo... tbm dá ruim
        if (!senderAccount) {
            errorCode = 404
            throw new Error("Conta do rementente não encontrada, verifique o CPF")
        } else if (!recipientAccount) {
            errorCode = 404
            throw new Error("Conta do destinatário não encontrada, verifique o CPF")
        } else if (senderAccount.balance < Number(req.body.amount)) {
            throw new Error("Saldo insuficiente")
        } else {
            // aqui da boa

            // transação pro remetente
            const senderTransaction: transaction = {
                amount: -Number(req.body.amount),
                date: today,
                description: `Transferência para ${req.body.recipientName}`
            }
            // adicionando no array
            senderAccount.statement.push(senderTransaction)

            // transação pro destinatário
            const recipientTransaction: transaction = {
                amount: Number(req.body.amount),
                date: today,
                description: `Transferência de ${req.body.senderName}`
            }
            // adicionando no array
            recipientAccount.statement.push(recipientTransaction)

            // deu boaaa
            res.status(202).send("Transferência enviada com sucesso!")
        }
    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send({ message: error.message })
    }

})

// depositar dinheiro na propria conta
app.put("/account/deposit", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        // se não tiver algum dos campos, da erro
        if (!req.body.name || !req.body.cpf || !req.body.amount) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        // verificando se a conta existe
        const existingAccount: userAccount | undefined = findCpf(req.body.cpf)

        // se não, da erro
        if (!existingAccount) {
            errorCode = 404
            throw new Error("Conta não encontrada")
        } else {
            // aqui da boa

            // criando a transicao bonitinha
            const newTransaction: transaction = {
                amount: Number(req.body.amount),
                date: Date.now(),
                description: "Depósito de Dinheiro"
            }

            // adicionando a transicao
            existingAccount.statement.push(newTransaction)

            // deu boaaaa
            res.status(202).send("Deposito feito com sucesso!")
        }
    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send(error.message)
    }
})

// atualizar saldo
app.put("/account/update/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        // salvando o cpf assim pq o params é bobo
        const cpf: number = Number(req.params.cpf)

        // procurando a conta lalala
        const account: userAccount | undefined = findCpf(cpf)

        // nao achou a conta? erro
        if (!account) {
            errorCode = 404
            throw new Error("Conta não encontrada")

        }
        else {
            // aqui da boa

            // achar as transicoes que ja foram
            const todayTransactions: transaction[] | undefined = account.statement.filter(transaction => {
                return transaction.date <= today
            })
    
            // o saldo
            let newBalance: number = account.balance

            // para cada transicao, soma com o dindin que já tem
            for (let transaction of todayTransactions) {
                newBalance = account.balance + transaction.amount
            }

            // o saldo é o novo saldo
            account.balance = newBalance
            res.status(200).send("Saldo atualizado!")
        }
    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send(error.message)
    }
})

// pesquisar saldo por cpf
app.get("/account/search", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const cpf: number = Number(req.query.cpf)
        // se não colocar o cpf
        if (!cpf) {
            throw new Error("Insira um CPF válido")
        }

        // verificar se existe o cpf
        const checkingCpf: userAccount | undefined = findCpf(cpf)

        // caso não: ERROOOOO
        if (!checkingCpf) {
            errorCode = 404
            throw new Error("Conta não encontrada")
        } else {
            // caso sim, pega o saldo e manda
            const result = checkingCpf.balance

            res.status(200).send({ balance: result })
        }

    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send({ message: error.message })
    }

})

// ver todas as contas
app.get("/account/all", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        // seta o resultado como o array de users
        const result: userAccount[] = users

        // manda o array
        res.status(200).send(result)

    } catch (error) {
        // deu tudo errado
        res.status(errorCode).send(error.message)
    }

})

// server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
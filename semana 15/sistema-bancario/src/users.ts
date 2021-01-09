export type userAccount = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    statement: transaction[]
}

export type transaction = {
    amount: number,
    date: number,
    description: string
}

export const users: userAccount[] = [
    {
        name: "Kylo Ren",
        cpf: 1663247689,
        birthDate: "20/10/1984",
        balance: 10000,
        statement: [{
            amount: 10000,
            date: 1610214088067,
            description: "Deposito de Dinheiro"
        }]
    },
    {
        name: "Rey Skywalker",
        cpf: 9876543210,
        birthDate: "15/03/1989",
        balance: 1400,
        statement: [{
            amount: 1200,
            date: 1610214088067,
            description: "Deposito de Dinheiro"
        }]
    }
]
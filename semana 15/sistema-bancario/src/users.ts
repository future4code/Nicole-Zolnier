export type userAccount = {
    name: string,
    cpf: number,
    birthDate: number,
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
        birthDate: 10012000,
        balance: 100,
        statement: []
    },
]
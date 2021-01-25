## Exercicio 1
a) Eu acho que é melhor usar strings porque elas são mais fáceis de guardar e são sempre únicas, até mesmo se você escrever uVa vai ser diferente de uvA.

b)
```
export const generateId = (): string => {
    return v4();
}
```
------------
## Exercicio 2
a) O código cria a conexão com o banco de dados e a função createUser insere um novo usuário na tabela userTableName.

b) Como já existe a tabela Users, criei a Users_Aula50
```
CREATE TABLE Users_Aula50 (
	id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
c)
```
export const insertUser = async (id: string, email: string, password: string) => {
    await connection(('Users_Aula50'))
      .insert({
        id,
        email,
        password,
      })
}
```
------------
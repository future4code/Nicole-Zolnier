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
c) O User é um type que eu criei que contêm id, email e password
```
export const insertUser = async (newUser: User) => {
    await connection(('Users_Aula50'))
      .insert(newUser)
}
```
------------
## Exercicio 3
a) Transforma a chave em string, que é o formato aceito pelo Secret do sign().

b)
```
type AuthenticationData = {
    id: string
}

const expiresIn = "1min";
export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
}
```
------------
## Exercicio 4
```
export const createUser = async (req:Request, res:Response) => {
    const { email, password } = req.body
    try {
        const id: string = generateId()

        if(!email || email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }

        if(!password || password.length < 6){
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }


        const newUser: User = {
            id: id,
            email: email,
            password: password
        }

        await insertUser(newUser);

        const token = generateToken({
            id,
        });
      
          res.status(200).send({
            token,
          })

        
    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}
```
------------
## Exercicio 5
```
export const selectUserByEmail = async(email: string): Promise<any> => {
    try {
        const result = await connection("Users_Aula50")
      .select("*")
      .where({ email })
 
    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
```
------------


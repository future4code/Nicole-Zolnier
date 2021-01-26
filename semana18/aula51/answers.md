## Exercicio 1
a) O round é o fator cost, um valor para definir o tempo . Quanto maior o valor que damos ao cost, mais lento será a requisição. O salt é um dado aleatório gerado pelo bcrypt para ser um input adicional à mensagem que será encriptada. Quanto maior o round, melhor será por motivos de segurança. O padrão é 12 e foi o que eu coloquei

b)
```
export const hash = async (
    plainText:string
    ): Promise<string> => {

        const rounds = Number(process.env.BCRYPTS_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plainText, salt)
}
```
c)
```
export const compare = async (
    plainText:string, 
    cypherText: string
    ): Promise<boolean> => {
    
        return bcrypt.compare(plainText, cypherText)
}
```
------------
## Exercicio 2
a) O cadastro deve ser modificado primeiro, para que a senha criada possa ser encriptada e depois fazermos o login comparando as senhas encriptadas (a salva no banco e a fornecida no login).

b) 
```
export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const id: string = generateId()

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }

        const passwordHash: string = await hash(password)

        const newUser: User = {
            id: id,
            email: email,
            password: passwordHash
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
c) 
```
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }

        const newUser = {
            email: email,
            password: password
        }

        const user = await selectUserByEmail(newUser.email);

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found");
        }

        const passwordIsCorrect = await compare(
            newUser.password,
            user.password
        );

        if (!passwordIsCorrect) {
            throw new Error("Invalid password");
        }



        const token = generateToken({
            id: user.id,
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
d) Não é necessário

------------
## Exercicio 3
a)
```
ALTER TABLE Users_Aula50
ADD role ENUM("NORMAL", "ADMIN") DEFAULT("NORMAL");
```

b)
```
export type AuthenticationData = {
  id: string,
  role: string,
}

const expiresIn = "1y";
export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData

  return {
    id: payload.id,
    role: payload.role
  }
}
```

c)
```
export const createUser = async (req: Request, res: Response) => {
    const { email, password, role } = req.body
    try {
        const id: string = generateId()

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }

        const passwordHash: string = await hash(password)

        const newUser: User = {
            id: id,
            email: email,
            password: passwordHash,
            role: role || 'NORMAL'
        }

        await insertUser(newUser);

        const token = generateToken({
            id,
            role
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

d)
```
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Make sure it has more than 6 characters")
        }

        const newUser = {
            email: email,
            password: password
        }

        const user = await selectUserByEmail(newUser.email);

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found");
        }

        const passwordIsCorrect = await compare(
            newUser.password,
            user.password
        );

        if (!passwordIsCorrect) {
            throw new Error("Invalid password");
        }



        const token = generateToken({
            id: user.id,
            role: user.role
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
## Exercicio 4
```

```
------------
## Exercicio 5
```

```
------------
## Exercicio 6
```

```

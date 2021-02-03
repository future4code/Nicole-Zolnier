/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { v4 } from "uuid"
import Knex from "knex"

/**************************** CONFIG ******************************/

dotenv.config()

export const connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 3306,
      database: process.env.DB_NAME,
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/

type AuthenticationData = {
   id: string
}

type User = {
   id: string,
   name: string,
   email: string,
   password: string
}

enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

type Post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}

/**************************** SERVICES ******************************/

const generateId = (): string => v4()

function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: process.env.JWT_EXPIRES_IN
      }
   )
}

function getTokenData(
   token: string
): AuthenticationData {
   const result: any = jwt.verify(
      token,
      process.env.JWT_KEY as string
   )

   return { id: result.id, }
}

const hash = async (
   plainText: string
): Promise<string> => {
   const rounds = Number(process.env.BCRYPT_COST);
   const salt = await bcrypt.genSalt(rounds);
   return bcrypt.hash(plainText, salt)
}

const compare = async (
   plainText: string, cypherText: string
): Promise<boolean> => {
   return bcrypt.compare(plainText, cypherText)
}

/**************************** ENDPOINTS ******************************/

app.post('/users/signup', async (req: Request, res: Response) => {
   try {
      let message = "Success!"
      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 406
         message = '"name", "email" and "password" must be provided'
         throw new Error(message)
      }

      const id: string = generateId()

      const cypherPassword = await hash(password);

      await connection('labook_users')
         .insert({
            id,
            name,
            email,
            password: cypherPassword
         })

      const token: string = generateToken({ id })

      res.status(201).send({ message, token })

   } catch (error) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
})

app.post('/users/login', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 406
         message = '"email" and "password" must be provided'
         throw new Error(message)
      }

      const queryResult: any = await connection("labook_users")
         .select("*")
         .where({ email })

      if (!queryResult[0]) {
         res.statusCode = 401
         message = "Invalid credentials"
         throw new Error(message)
      }

      const user: User = {
         id: queryResult[0].id,
         name: queryResult[0].name,
         email: queryResult[0].email,
         password: queryResult[0].password
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 401
         message = "Invalid credentials"
         throw new Error(message)
      }

      const token: string = generateToken({
         id: user.id
      })

      res.status(200).send({ message, token })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

app.post('/posts/create', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string

      const tokenData: AuthenticationData = getTokenData(token)

      const id: string = generateId()

      await connection("labook_posts")
         .insert({
            id,
            photo,
            description,
            type,
            author_id: tokenData.id
         })

      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

app.get('/posts/:id', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { id } = req.params

      const queryResult: any = await connection("labook_posts")
         .select("*")
         .where({ id })

      if (!queryResult[0]) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }

      const post: Post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }

      res.status(200).send({ message, post })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})
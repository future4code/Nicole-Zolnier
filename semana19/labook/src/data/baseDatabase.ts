import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"

dotenv.config()

export default class BaseDatabase {

    protected static connection: Knex = knex({
       client: 'mysql',
       connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          port: 3306
       }
    })
 
 }
// Libraries
import express, { Express } from 'express'
import cors from 'cors'

// Connection
import { AddressInfo } from 'net'

// Endpoints
import { signUp } from './endpoints/signUp'
import { login } from './endpoints/login'
import { getOwnProfile } from './endpoints/getOwnProfile'
import { getUserProfile } from './endpoints/getUserProfile'
import { createRecipe } from './endpoints/createRecipe'
import { getRecipeById } from './endpoints/getRecipeById'

const app: Express = express()
app.use(express.json())
app.use(cors())


app.post('/user/signup', signUp)
app.post('/user/login', login)
app.get('/user/profile', getOwnProfile)
app.get('/user/:id', getUserProfile)

app.post('/recipe/create', createRecipe)
app.get('/recipe/:id', getRecipeById)


// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })
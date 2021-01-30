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
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllRecipes } from './endpoints/getAllRecipes'
import { deleteUser } from './endpoints/deleteUser'
import { followUser } from './endpoints/followUser'
import { unfollowUser } from './endpoints/unfollowUser'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/user/all', getAllUsers)
app.get('/recipe/all', getAllRecipes)

app.post('/user/signup', signUp)
app.post('/user/login', login)
app.post('/user/follow', followUser)
app.post('/user/unfollow', unfollowUser)
app.get('/user/profile', getOwnProfile)
app.delete('/user/:id', deleteUser)
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
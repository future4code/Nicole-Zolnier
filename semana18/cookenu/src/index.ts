// Libraries
import express, { Express } from 'express'
import cors from 'cors'

// Connection
import { AddressInfo } from 'net'

// Endpoints
import { signUp } from './endpoints/user/signUp'
import { login } from './endpoints/user/login'
import { getOwnProfile } from './endpoints/user/getOwnProfile'
import { getUserProfile } from './endpoints/user/getUserProfile'
import { createRecipe } from './endpoints/recipe/createRecipe'
import { getRecipeById } from './endpoints/recipe/getRecipeById'
import { getAllUsers } from './endpoints/user/getAllUsers'
import { getAllRecipes } from './endpoints/recipe/getAllRecipes'
import { deleteUser } from './endpoints/user/deleteUser'
import { followUser } from './endpoints/user/followUser'
import { unfollowUser } from './endpoints/user/unfollowUser'
import { resetPassword } from './endpoints/user/resetPassword'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/user/all', getAllUsers)
app.post('/user/signup', signUp)
app.post('/user/login', login)
app.post('/user/password/reset', resetPassword)
app.post('/user/follow', followUser)
app.post('/user/unfollow', unfollowUser)
app.get('/user/profile', getOwnProfile)
app.delete('/user/:id', deleteUser)
app.get('/user/:id', getUserProfile)

app.get('/recipe/all', getAllRecipes)
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
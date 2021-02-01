import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { signup } from './controllers/signup'
import { login } from './controllers/login'

const app = express()
app.use(express.json())
app.use(cors())

app.put('/user/signup', signup)
app.post('/user/login', login)
// app.get('/user/all', getAllUsers)
// app.delete('/user/delete/:id', deleteUser)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo
      console.log(`Server is running in http://localhost:${address.port}`)
   } else {
      console.error(`Failure upon starting server.`)
   }
})
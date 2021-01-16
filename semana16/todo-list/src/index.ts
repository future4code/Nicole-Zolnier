import express, { Express } from "express";
import { AddressInfo } from "net";
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'
import getTaskById from './endpoints/getTaskById'
import getAllUsers from './endpoints/getAllUsers'
import getTaskByUserId from './endpoints/getTaskByUserId'
import getUserByName from './endpoints/getUserByName'

const app: Express = express();

app.use('/user', getAllUsers)
app.use('/user',createUser)
app.use('/user', getUserByName)
app.use('/user', getUserById)
app.use('/user', editUser)
app.use('/task', createTask)
app.use('/task', getTaskByUserId)
app.use('/task', getTaskById)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`)
   } else {
      console.error(`Failure upon starting server.`)
   }
})
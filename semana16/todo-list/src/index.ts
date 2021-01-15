import express, { Express } from "express";
import { AddressInfo } from "net";
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'

const app: Express = express();

app.use('/user',createUser)
app.use('/user', getUserById)
// app.use('/user/edit/:id', editUser)
// app.use('/task', createTask)
// app.use('/task/:id', getTaskById)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
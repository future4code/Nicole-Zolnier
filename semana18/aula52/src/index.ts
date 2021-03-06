import express from "express";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { deleteUser } from "./endpoints/deleteUser";
import { getUserByToken } from "./endpoints/getUserByToken";
import { login } from "./endpoints/login"

const app = express();
app.use(express.json());

app.post('/signup', createUser)
app.post('/login', login)
app.delete('/user/:id', deleteUser)
app.get('/user/:id',)
app.get('/user/profile', getUserByToken)


const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
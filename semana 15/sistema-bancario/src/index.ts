import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { users, userAccount } from './users'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/account/all", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const result: userAccount[] = users

        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});
  
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

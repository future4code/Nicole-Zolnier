import userDatabase from "../data/userDatabase"
import { loginInputDTO, signupInputDTO } from "../model/user"
import { User } from "../entities/user"
import { CustomError } from "../error/CustomError"
import authenticator from "../services/authenticator"
import hashManager from "../services/hashManager"
import idGenerator from "../services/idGenerator"


class UserBusiness {
    public async businessSignup(input: signupInputDTO) {
        try {
            if (!input.name || !input.email || !input.password) {
                throw new CustomError(406, "Please provide a 'name', an 'email' and a 'password'")
            }

            const id: string = idGenerator.generateId()

            const cypherPassword = await hashManager.hash(input.password)

            const newUser: User = new User(
                id,
                input.name,
                input.email,
                cypherPassword
            )


            await userDatabase.insertUser(newUser)

            const token: string = authenticator.generateToken({ id })

            return token
        } catch (error) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }



    public async businessLogin(input: loginInputDTO) {
        try {

            if (!input.email || !input.password) {
                throw new CustomError(400, '"email" and "password" must be provided')
            }

            const queryResult:User | null = await userDatabase.selectUserByEmail(input.email)

            if (!queryResult) {
                throw new CustomError(404, "Invalid credentials")
            }

            const password: string = queryResult.getPassword()
            

            const passwordIsCorrect: boolean = await hashManager.compare(input.password, password)

            if (!passwordIsCorrect) {
                throw new CustomError(404, "Invalid credentials")
            }

            const id: string = queryResult.getId()
            const token: string = authenticator.generateToken({id})

            return token

        } catch (error) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }
}

export default new UserBusiness()
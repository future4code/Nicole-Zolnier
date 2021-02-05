import userDatabase from "../data/userDatabase"
import { signupInputDTO, user } from "../entities/types"
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

            const newUser: user = {
                id: id,
                name: input.name,
                email: input.email,
                password: cypherPassword,
            }

            await userDatabase.insertUser(newUser)

            const token: string = authenticator.generateToken({ id })

            return token
        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message)
        }
    }



    public async businessLogin(email: string, password: string) {
        try {

            if (!email || !password) {
                throw new CustomError(400, '"email" and "password" must be provided')
            }

            const queryResult: any = await userDatabase.selectUserByEmail(email)

            if (!queryResult) {
                throw new CustomError(404, "Invalid credentials")
            }

            const user: user = {
                id: queryResult.id,
                name: queryResult.name,
                email: queryResult.email,
                password: queryResult.password
            }

            const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

            if (!passwordIsCorrect) {
                throw new CustomError(404, "Invalid credentials")
            }

            const token: string = authenticator.generateToken({
                id: user.id
            })

            return token

        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message)
        }
    }
}

export default new UserBusiness()
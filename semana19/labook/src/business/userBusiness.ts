import { selectUserByEmail } from "../data/UserDatabase"
import { user } from "../entities/types"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"

export const businessLogin = async (email: string, password: string) => {
    try {
        let message = 'Sucess!'
        if (!email || !password) {
            message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const queryResult: any = await selectUserByEmail(email)

        if (!queryResult) {
            message = "Invalid credentials"
            throw new Error(message)
        }

        const user: user = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            message = "Invalid credentials"
            throw new Error(message)
        }

        const token: string = generateToken({
            id: user.id
        })

        return {message, token}

    } catch (error) {
        throw new Error(error.message);
    }
}

import { selectUserByEmail } from "../data/userDatabase"
import { user } from "./entities/user"
import { generateToken } from "./services/authenticator"
import { compare } from "./services/hashManager"

export const loginBusiness = async (input: any): Promise<string> => {
    try {
        if (!input.email || !input.password) {
            throw new Error("Please provide an email and a password")
        }

        const user: user = await selectUserByEmail(input.email)

        if (!user) {
            throw new Error("User not found")
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Incorrect password")
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token
    } catch (error) {
        throw new Error(error.message);
    }
}
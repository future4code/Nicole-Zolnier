import { insertUser } from "../data/userDatabase";
import { user } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

export const signupBusiness = async (input: any): Promise<string> => {

    try {
        if (!input.name || !input.email || !input.password || !input.role) {
            throw new Error('Please fill all fields.');
        }
        if (!input.email.includes('@')) {
            throw new Error('Invalid email.');
        }
        if (input.password.length < 6) {
            throw new Error('Invalid password. Make sure it has more than 6 characters');
        }

        const id: string = generateId()
        const hashPassword: string = await hash(input.password)

        const userInfo: user = {
            id,
            email: input.email,
            name: input.name,
            password: hashPassword,
            role: input.role
        }

        await insertUser(userInfo)

        const token: string = generateToken({
            id,
            role: input.role
        })

        return token
    } catch (error) {
        throw new Error(error.message);
    }
}
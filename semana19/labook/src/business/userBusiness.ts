import { insertUser, selectUserByEmail } from "../data/userDatabase"
import { signupInputDTO, user } from "../entities/types"
import { generateToken } from "../services/authenticator"
import { compare, hash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"

export const businessSignup = async (input: signupInputDTO) => {
    let message = 'Sucess!'

    if (!input.name || !input.email || !input.password ) {
        message = "Please provide a 'name', an 'email' and a 'password'"
       throw new Error(message)
    }
 
    const id: string = generateId()
 
    const cypherPassword = await hash(input.password)

    const newUser: user = {
        id: id,
        name: input.name,
        email: input.email,
        password: cypherPassword,
     }
 
    await insertUser(newUser)
 
    const token: string = generateToken({id})
 
    return token
 }

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

        return token

    } catch (error) {
        throw new Error(error.message);
    }
}

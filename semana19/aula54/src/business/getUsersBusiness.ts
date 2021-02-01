import { selectAllUsers } from "../data/userDatabase"
import { user } from "./entities/user"
import { getTokenData } from "./services/authenticator"

export const getUsersBusiness = async (token: string): Promise<any> => {
    try {
        getTokenData(token)

        const users: user[] = await selectAllUsers() 

        return users

    } catch (error) {
        throw new Error(error.message);
    }

}
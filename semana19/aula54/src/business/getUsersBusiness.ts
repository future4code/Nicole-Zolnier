import { selectAllUsers } from "../data/userDatabase"
import { getTokenData } from "./services/authenticator"

export const getUsersBusiness = async (token: string): Promise<any> => {
    try {
        getTokenData(token)

        if (!token || !getTokenData) {
            throw new Error('Invalid token')
        }

        const users = await selectAllUsers()

        return users

    } catch (error) {
        throw new Error(error.message);
    }

}
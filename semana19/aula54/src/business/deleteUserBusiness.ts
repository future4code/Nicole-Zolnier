import { deleteUser } from "../data/userDatabase";
import { authenticationData } from "./entities/user";
import { getTokenData } from "./services/authenticator";

export const deleteUserBusiness = async (input: {token:string, id:string}) => {
    try {
        const tokenData:authenticationData = getTokenData(input.token)
        
        if(tokenData.role !== 'ADMIN'){
            throw new Error('Only ADMIN users can delete profiles. Please, contact your system admin.');
        } else {
            await deleteUser(input.id)
        }
    } catch (error) {
        throw new Error(error.message || 'Error deleting user.');
    }
}
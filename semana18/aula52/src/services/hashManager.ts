import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export const hash = async (
    plainText:string
    ): Promise<string> => {

        const rounds = Number(process.env.BCRYPTS_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plainText, salt)
}

export const compare = async (
    plainText:string, 
    cypherText: string
    ): Promise<boolean> => {
    
        return bcrypt.compare(plainText, cypherText)
}
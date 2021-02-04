// Libraries
import * as bcrypt from "bcryptjs"


// Encryption functions
export const generateHash = async (plainText: string): Promise<string> => {
    const salt: string = await bcrypt.genSalt(Number(process.env.BCRYPT_COST))

    const cypheredText: string = await bcrypt.hash(plainText, salt)

    return cypheredText
}

export const compareHash = async (plainText: string, hash: string): Promise<boolean> => bcrypt.compare(plainText, hash)
// Libraries
import * as jwt from 'jsonwebtoken'

export const generateToken = (id: string): string => {
    const token: string = jwt.sign(
        { id },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}

export const getTokenData = (token:string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY!);

    return payload as AuthenticationData
}

export type AuthenticationData = {
    id: string
}

import * as jwt from "jsonwebtoken"

export const generateToken = (payload: AuthenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}

export const getTokenData = (token: string): AuthenticationData => {
    const result: any = jwt.verify(
        token,
        process.env.JWT_KEY as string
    )

    return { id: result.id, }
}

export type AuthenticationData = {
    id: string
}

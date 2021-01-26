import * as jwt from 'jsonwebtoken'

export type AuthenticationData = {
  id: string
}

const expiresIn = "1y";
export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

export const getTokenData = (token: string): AuthenticationData => {
  return jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData
}
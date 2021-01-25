import * as jwt from 'jsonwebtoken'

type AuthenticationData = {
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

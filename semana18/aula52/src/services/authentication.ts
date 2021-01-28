import * as jwt from 'jsonwebtoken'
import { ROLE } from '../types';

export type AuthenticationData = {
  id: string,
  role: ROLE,
}

const expiresIn = "1y";
export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData

  return {
    id: payload.id,
    role: payload.role
  }
}
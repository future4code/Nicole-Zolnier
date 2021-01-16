import {connection} from './connection'

export const insertUser = async (
    name: string, nickname: string, email: string
  ) => {
    await connection
      .insert({
        name: name, 
        nickname: nickname,
        email: email
      })
      .into("Users")
  }
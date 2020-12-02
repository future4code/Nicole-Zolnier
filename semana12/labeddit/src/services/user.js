import axios from 'axios'
import {baseUrl} from '../constants/urls'
import { goToFeed } from '../router/coordinator'

export const login = (body, history) => {
    axios.post(`${baseUrl}/login`, body).then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("username", res.data.user.username)
      goToFeed(history)
    }).catch((err) => {
      window.alert("Email ou senha incorretos!")
      console.log(err)
    })
}

export const signUp = (body, history) => {
    axios.post(`${baseUrl}/signup`, body).then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("username", res.data.user.username)
        goToFeed(history)
      }).catch((err) => {
        console.log(err)
      })
}
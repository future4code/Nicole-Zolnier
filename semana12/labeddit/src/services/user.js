import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../router/coordinator'

export const login = (body, history, setLoading) => {
  setLoading(true)
  axios.post(`${baseUrl}/login`, body).then((res) => {
    setLoading(false)
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", res.data.user.username)
    goToFeed(history)
  }).catch((err) => {
    setLoading(false)
    window.alert("Email ou senha incorretos!")
  })
}

export const signUp = (body, history, setLoading) => {
  setLoading(true)
  axios.post(`${baseUrl}/signup`, body).then((res) => {
    setLoading(false)
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", res.data.user.username)
    goToFeed(history)
  }).catch((err) => {
    setLoading(false)
    window.alert("Ops! Acho que já existe um usuário com algum desses dados")
  })
}
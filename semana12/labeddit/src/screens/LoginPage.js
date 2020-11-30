import React from 'react'
import { useForm } from '../hooks/useForm'
import axios from 'axios'
import {baseUrl} from '../constants/urls'
import { useHistory } from 'react-router-dom'


function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()

    const body = {
      email: form.email,
      password: form.password
    };

    axios.post(`${baseUrl}/login`, body).then((res) => {
      reset()
      localStorage.setItem("token", res.data.token)
      history.push("/feed")
    }).catch((err) => {
      window.alert("Email ou senha incorretos!")
      console.log(err)
    })
  }

  return (
    <div>
      <form onSubmit={login}>
        <input type={"email"} onChange={onChange} value={form.email} name="email" />
        <input type={"password"} value={form.password} onChange={onChange} name="password" />
        <button>LOGAR</button>
      </form>
    </div>
  );
}

export default LoginPage;
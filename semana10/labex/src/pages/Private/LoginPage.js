import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import {baseUrl} from '../../constants/urls'

function LoginPage() {
  const history = useHistory()
  const { form, onChange, reset } = useForm({ email: "", password: "" });


  const login = (e) => {
    e.preventDefault()

    const body = {
      email: form.email,
      password: form.password
    };

    axios.post(`${baseUrl}/login`, body).then((res) => {
        reset()
        localStorage.setItem("token", res.data.token)
        history.push("/admin")
    }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
        <NavBar />
        <p>login</p>
        <form onSubmit={login}>
          <input placeholder="email" value={form.email} onChange={onChange} name="email" type="email" required/>
          <input placeholder="senha" type="password"  value={form.password} onChange={onChange} name="password" required/>
          <button>LOGAR</button>
        </form>
        
    </div>
  );
}

export default LoginPage;
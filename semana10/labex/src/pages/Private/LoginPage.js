import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { useInput } from '../../hooks/useInput'
import axios from 'axios'
import {baseUrl} from '../../constants/urls'

function LoginPage() {
  const history = useHistory()
  const [email, handleEmail] = useInput()
  const [password, handlePassword] = useInput()

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios.post(`${baseUrl}/login`, body).then((res) => {
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
        <input placeholder="email" value={email} onChange={handleEmail}/>
        <input placeholder="senha" type="password" value={password} onChange={handlePassword}/>
        <button onClick={login}>LOGAR</button>
    </div>
  );
}

export default LoginPage;
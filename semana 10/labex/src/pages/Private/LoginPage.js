import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { baseUrl } from '../../constants/urls'
import { TextField, Button, MuiThemeProvider } from '@material-ui/core'
import Footer from '../../components/Footer/Footer'
import {Title, MainContainer, LoginForm, myTheme } from '../styles'


function LoginPage() {
  const history = useHistory()
  const { form, onChange, reset } = useForm({ email: "", password: "" });


  // função pra fazer login maneiro
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
      window.alert("Your password or email is incorrect")
      console.log(err)
    })
  }

  return (
    <div>
      <NavBar />
      <MainContainer>
        <Title variant="h3">Log in</Title>


        <LoginForm onSubmit={login}>
        
          <TextField variant="outlined" label="Email" type={"email"} onChange={onChange} value={form.email} name="email" required />
          <TextField variant="outlined" label="Password" type={"password"} value={form.password} onChange={onChange} name="password" required />
          <MuiThemeProvider theme={myTheme}>
            <Button type={'submit'} variant="contained" color="secondary">Log in</Button>
          </MuiThemeProvider>
        </LoginForm>


      </MainContainer>

      <Footer />

    </div>
  );
}

export default LoginPage;
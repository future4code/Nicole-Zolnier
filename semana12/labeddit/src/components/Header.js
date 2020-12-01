import React from 'react'
import { goToLogin, goToSignUp } from '../router/coordinator'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: green;
  height: 8vh;
  align-items: center;
`


function Header() {
  const history = useHistory()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history)
  }


  if (token) {
    return (<HeaderContainer>
      <h1>Logo</h1>
      <button onClick={logout}>Logout</button>
      <h1>usuario</h1>
    </HeaderContainer>
    )
  } else {
    return (<HeaderContainer>
      <h1>Logo</h1>
      <button onClick={() => goToLogin(history)}>Log in</button>
      <button onClick={() => goToSignUp(history)}>Cadastrar</button>
    </HeaderContainer>)
  }
}

export default Header;
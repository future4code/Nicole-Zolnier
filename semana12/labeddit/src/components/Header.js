import React from 'react'
import { goToFeed, goToLogin, goToSignUp } from '../router/coordinator'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #0DD3BB;
  height: 8vh;
  align-items: center;
`
const HeaderAccountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 8vh;
  align-items: center;
`

function Header() {
  const history = useHistory()
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username")

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history)
  }


  if (token) {
    return (<HeaderAccountContainer>
      <h1>Logo</h1>
      <button onClick={() => goToFeed(history)}>feed</button>
      <button onClick={logout}>Logout</button>
      <h1>u/{username}</h1>
    </HeaderAccountContainer>
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
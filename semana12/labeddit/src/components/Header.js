import React from 'react'
import { goToFeed, goToLogin, goToSignUp } from '../router/coordinator'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import logo from '../assets/logo-nome.svg'
import { Button } from "@chakra-ui/react"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 8vh;
  align-items: center;
  margin: 0 1em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    margin: 0 0.3em;
  }
`

const Logo = styled.img`
  width: 12%;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 45%;
  }
  @media screen and (min-device-width : 421px) and (max-device-width : 800px) {
    width: 32%;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
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
    return (<HeaderContainer>
      <Logo src={logo} />
      <button onClick={() => goToFeed(history)}>feed</button>
      <button onClick={logout}>Logout</button>
      <h1>u/{username}</h1>
    </HeaderContainer>
    )
  } else {
    return (<HeaderContainer>
      <Logo src={logo} />
      <ButtonsContainer>
        <Button colorScheme="blue" onClick={() => goToSignUp(history)}>Cadastrar</Button>
        <Button ml="1em" colorScheme="blue" variant="outline" onClick={() => goToLogin(history)}>Log in</Button>
      </ButtonsContainer>
    </HeaderContainer>)
  }
}

export default Header;
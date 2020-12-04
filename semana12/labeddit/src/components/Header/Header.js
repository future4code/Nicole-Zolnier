import React from 'react'
import { goToFeed, goToLogin, goToSignUp } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/logo-nome.svg'
import { Button, Avatar, AvatarBadge } from "@chakra-ui/react"
import home from '../../assets/home.svg'
import logoutIcon from '../../assets/logout.svg'
import { HeaderContainer, Logo, ButtonsContainer, HomeContainer, HomeIcon, LeftContainer, LogoFeed, RightContainer, LogoutIcon, Title, Username, CenterContainer } from './styled'
import SearchBar from '../SearchBar'

function Header() {
  const history = useHistory()
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username")

  const logout = () => {
    const beSure = window.confirm("Você tem certeza que quer sair da conta?")
    if (beSure) {
      localStorage.removeItem("token");
      goToLogin(history)
    }
  }


  if (token) {
    return (<HeaderContainer>
      <LeftContainer>
        <LogoFeed onClick={() => goToFeed(history)} src={logo} />
        <HomeContainer onClick={() => goToFeed(history)}>
          <HomeIcon src={home} />
          <Title>Home</Title>
        </HomeContainer>
      </LeftContainer>

      <CenterContainer>
        <SearchBar />
      </CenterContainer>


      <RightContainer>
        <Avatar boxSize="2.2em" src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}>
          <AvatarBadge boxSize="0.8em" bg="green.500" />
        </Avatar>
        <Username pl="0.5em" size="sm">u/{username}</Username>
        <LogoutIcon onClick={logout} src={logoutIcon} />
      </RightContainer>
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
import React from 'react'
import { goToFeed, goToLogin, goToSignUp } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/logo-nome.svg'
import { Button, Heading, Text, Avatar, AvatarBadge } from "@chakra-ui/react"
import home from '../../assets/home.svg'
import logoutIcon from '../../assets/logout.svg'
import { HeaderContainer, Logo, ButtonsContainer, HomeContainer, HomeIcon, LeftContainer, LogoFeed, RightContainer, LogoutIcon } from './styled'

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
      <LeftContainer>
        <LogoFeed src={logo} />
        <HomeContainer onClick={() => goToFeed(history)}>
          <HomeIcon src={home} />
          <Text>Home</Text>
        </HomeContainer>
      </LeftContainer>

      <RightContainer>
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}>
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Heading pl="1em" size="sm">u/{username}</Heading>
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
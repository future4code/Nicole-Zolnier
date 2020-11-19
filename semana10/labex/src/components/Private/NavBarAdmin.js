import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/white-admin.svg'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'


const Header = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  
`

const Logo = styled.img`
  width: 10%;
`

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#67C7EB"
    }
  },
})


function NavBarAdmin() {
  const history = useHistory()

  const goToHome = () => {
    localStorage.removeItem("token");
    history.push("/")
  }

  const goToAdmin = () => {
    history.push("/admin")
  }

  const goToCreateTrip = () => {
    history.push("/admin/viagens/criar-viagem")
  }

  return (
    <Header>
        <MuiThemeProvider theme={myTheme}>
        <Logo src={logo} onClick={goToAdmin} />
        <Button color="primary" onClick={goToCreateTrip}>Criar Viagens</Button>
        <Button color="secondary" variant="contained" onClick={goToHome}>Logout</Button>
        </MuiThemeProvider>
        
    </Header>
  );
}

export default NavBarAdmin
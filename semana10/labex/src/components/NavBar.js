import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/white-starkx.svg'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'


const Header = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  
`

const Logo = styled.img`
  width: 15%;
  cursor: pointer;
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

function NavBar() {
  const history = useHistory()

  const goToHome = () => {
    history.push("/")
  }
  
  const goToAboutUs = () => {
    history.push("/about")
  }

  const goToLogin = () => {
    history.push("/login")
  }

  const goToApply = () => {
    history.push("/apply")
  }

  const goToTrips = () => {
    history.push("/trips")
  }

  return (
    <Header>
      <Logo src={logo} onClick={goToHome} />
      <MuiThemeProvider theme={myTheme}>
        <Button color="primary" onClick={goToAboutUs}>About Us</Button>
        <Button color="primary" onClick={goToApply}>Apply</Button>
        <Button color="primary" onClick={goToTrips}>Trips</Button>
        <Button color="secondary" variant="contained" onClick={goToLogin}>Admin</Button>
      </MuiThemeProvider>

    </Header>
  );
}

export default NavBar;
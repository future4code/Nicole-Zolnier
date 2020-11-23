import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../assets/white-starkx.svg'
import { Button, MuiThemeProvider } from '@material-ui/core'
import {myTheme, Header, StarkxLogo} from './styles'

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
      <StarkxLogo src={logo} onClick={goToHome} />
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
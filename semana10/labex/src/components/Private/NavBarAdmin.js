import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/white-admin.svg'
import { Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const Header = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  
`

const Logo = styled.img`
  width: 10%;
  cursor: pointer;
`

const useStyles = makeStyles({
  logout: {
      color: "white",
      background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
  },
  normal: {
    color: "white",
  }
});


function NavBarAdmin() {
  const classes = useStyles()

  const history = useHistory()

  const goToHome = () => {
    localStorage.removeItem("token");
    history.push("/")
  }

  const goToAdmin = () => {
    history.push("/admin")
  }

  const goToTrips = () => {
    history.push("/admin/trips")
  }

  const goToCreateTrip = () => {
    history.push("/admin/trips/create-trip")
  }

  return (
    <Header>
        <Logo src={logo} onClick={goToAdmin} />
        <Button className={classes.normal} onClick={goToTrips}>Trips</Button>
        <Button className={classes.normal} onClick={goToCreateTrip}>Create Trip</Button>
        <Button className={classes.logout} variant="contained" onClick={goToHome}>Logout</Button>
  
        
    </Header>
  );
}

export default NavBarAdmin
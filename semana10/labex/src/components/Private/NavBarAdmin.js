import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/white-admin.svg'
import { Button } from '@material-ui/core'
import {useStyles, Header, AdminLogo} from '../styles'

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
      <AdminLogo src={logo} onClick={goToAdmin} />
      <Button className={classes.normal} onClick={goToTrips}>Trips</Button>
      <Button className={classes.normal} onClick={goToCreateTrip}>Create Trip</Button>
      <Button className={classes.logout} variant="contained" onClick={goToHome}>Logout</Button>


    </Header>
  );
}

export default NavBarAdmin
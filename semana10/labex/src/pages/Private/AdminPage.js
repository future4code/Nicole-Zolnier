import React from 'react'
import { useHistory } from 'react-router-dom';
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import TripCard from '../../components/Private/TripCard';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useTripsList } from '../../hooks/useTripsList'
import { Button, Typography } from '@material-ui/core';
import Loading from '../../components/Loading';
import axios from 'axios'
import {baseUrl} from '../../constants/urls'
import {GridContainer, Line, CenterContainer, BlackContainer, useStyles} from '../styles'


function AdminPage() {
  const classes = useStyles()
  
  // aqui ta a função de get trips
  const [trips, loaded] = useTripsList()
  useProtectedPage()

  const history = useHistory();

  // função pra ir pros detalhes com base no id
  const goToDetails = (id) => {
    history.push(`/admin/trips/detail/${id}`);
  };

  // função pra ir pra criar uma trip
  const goToCreationMode = () => {
    history.push("/admin/trips/create-trip")
  }

  // função pra deletar trips que força o admin a criar outra pois ele que lute
  const deleteTrip = (id) => {
    axios.delete(`${baseUrl}/trips/${id}`).then((response) => {
      window.alert("Trip deleted! Now let's create another one")
      history.push("/admin/trips/create-trip")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <NavBarAdmin />

      <BlackContainer>
        <Typography className={classes.welcome} variant="h3">Welcome!</Typography>
        <CenterContainer>
          <Line></Line>
          <Typography variant="h5">Trips</Typography>
          <Button variant="contained" className={classes.button} onClick={goToCreationMode}>Create more trips</Button>
        </CenterContainer>
        {loaded? <GridContainer>
          {trips.map((item) => {
            return <TripCard deleteTrip={deleteTrip} goToDetails={goToDetails} date={item.date} planet={item.planet} description={item.description} id={item.id} name={item.name} />
          })}
        </GridContainer> : <CenterContainer><Loading /></CenterContainer> }
      </BlackContainer>


    </div>
  );
}

export default AdminPage;
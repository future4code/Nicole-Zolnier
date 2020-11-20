import React from 'react'
import { useHistory } from 'react-router-dom';
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import TripCard from '../../components/Private/TripCard';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useTripsList } from '../../hooks/useTripsList'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core';
import Loading from '../../components/Loading';



const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  padding: 1em;
  padding-bottom: 0;
`
const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
`

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BlackContainer = styled.div`
  background-color: black;
  color: white;
  width: auto;
  height: 110vh;
`

const useStyles = makeStyles({
  button: {
    color: "white",
    background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
    width: "30em",
    margin: '1em',
    marginBottom: '2em',
  },
  title: {
    padding: "0.5em"
  }
});



function AdminPage() {
  const classes = useStyles()

  const [trips, loaded] = useTripsList()
  useProtectedPage()

  const history = useHistory();

  const goToDetails = (id) => {
    history.push(`/admin/viagens/detalhe/${id}`);
  };

  const goToCreationMode = () => {
    history.push("/admin/viagens/criar-viagem")
  }


  return (
    <div>
      <NavBarAdmin />

      <BlackContainer>
        <Typography className={classes.title} variant="h3">Bem-vinde!</Typography>
        <CenterContainer>
          <Line></Line>
          <Typography variant="h5">Viagens</Typography>
          <Button variant="contained" className={classes.button} onClick={goToCreationMode}>Criar mais viagens</Button>
        </CenterContainer>
        {loaded? <GridContainer>
          {trips.map((item) => {
            return <TripCard goToDetails={goToDetails} date={item.date} planet={item.planet} description={item.description} id={item.id} name={item.name} />
          })}
        </GridContainer> : <CenterContainer><Loading /></CenterContainer> }
      </BlackContainer>


    </div>
  );
}

export default AdminPage;
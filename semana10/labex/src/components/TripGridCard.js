import React from 'react'
import {useTripsList} from '../hooks/useTripsList'
import TripCard from './TripCard'
import styled from 'styled-components'
import Loading from './Loading'
import { Typography } from '@material-ui/core'

const Title = styled(Typography)`
  color: white;
  margin: 0.2em;
`

const Credits = styled(Typography)`
  color: white;
  margin: 0.2em;
  padding-right: 20em;
  padding-bottom: 1.5em;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  width: 100%;
  height: 100%;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2.5em;
  padding: 1em;
  margin-bottom: 8em;
`
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function TripGridCard() {
    const [trips, loaded] = useTripsList()

    const mapResult = trips.map((item, i) => {
      return <TripCard name={item.name} index={i} date={item.date} description={item.description} />
    })
    
    return (
    <MainContainer>
        <Title variant="h3" align="center" gutterBottom>Trips</Title>
        <Title variant="h4" align="center"><i>"I’m sorry, Earth is closed today. <br></br>
        You better pack it up and get outta here."</i> </Title>
        <Credits variant="h5" align="right" >- Iron Man</Credits>
        {loaded? <GridContainer>{mapResult}</GridContainer>  : <Center><Loading /></Center>  }
    </MainContainer>
  );
}

export default TripGridCard;
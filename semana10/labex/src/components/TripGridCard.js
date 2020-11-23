import React from 'react'
import {useTripsList} from '../hooks/useTripsList'
import TripCard from './TripCard'
import Loading from './Loading'
import {Title, Center, TripsContainer, GridContainer, Credits } from './styles'


function TripGridCard() {
    const [trips, loaded] = useTripsList()

    const mapResult = trips.map((item, i) => {
      return <TripCard name={item.name} index={i} date={item.date} description={item.description} />
    })
    
    return (
    <TripsContainer>
        <Title variant="h3" align="center" gutterBottom>Trips</Title>
        <Title variant="h4" align="center"><i>"I’m sorry, Earth is closed today. <br></br>
        You better pack it up and get outta here."</i> </Title>
        <Credits variant="h5" align="right" >- Iron Man</Credits>
        {loaded? <GridContainer>{mapResult}</GridContainer>  : <Center><Loading /></Center>  }
    </TripsContainer>
  );
}

export default TripGridCard;
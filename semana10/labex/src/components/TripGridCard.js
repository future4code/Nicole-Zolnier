import React from 'react'
import {useTripsList} from '../hooks/useTripsList'
import TripCard from './TripCard'
import styled from 'styled-components'
import Loading from './Loading'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2.5em;
`

function TripGridCard() {
    const [trips, loaded] = useTripsList()

    return (
    <GridContainer>
        {loaded? trips.map((item, i) => {
          return <TripCard name={item.name} index={i} date={item.date} description={item.description} />
        }) : <Loading /> }
    </GridContainer>
  );
}

export default TripGridCard;
import React from 'react'
import {baseUrl} from '../constants/urls' 
import {useRequestData} from '../hooks/useRequestData'
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
    const data = useRequestData(
        `${baseUrl}/trips`,
        undefined
    )    

    return (
    <GridContainer>
        {data? data.trips.map((item, i) => {
          return <TripCard name={item.name} index={i} date={item.date} description={item.description} />
        }) : <Loading /> }
    </GridContainer>
  );
}

export default TripGridCard;
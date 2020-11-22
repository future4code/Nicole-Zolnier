import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
  margin-top: 2em;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function TripInfo(props) {
  return (
    <div>
        <Center>
        <Line></Line>
        <Typography variant="h5">{props.name}</Typography>
        </Center>
        <p>Date: {props.date}</p>
        <p>Description: {props.description}</p>
        <p>Planet: {props.planet}</p>
        <p>Duration: {props.duration} days</p>
    </div>
  );
}

export default TripInfo;
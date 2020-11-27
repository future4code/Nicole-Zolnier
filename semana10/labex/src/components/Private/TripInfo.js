import React from 'react'
import {Line, Center} from '../styles'
import Typography from '@material-ui/core/Typography'


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
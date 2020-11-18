import React from 'react'

function TripInfo(props) {
  return (
    <div>
        <h1>Informações da Viagem</h1>
        <p>{props.name}</p>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <p>{props.planet}</p>
        <p>{props.durationInDays}</p>
    </div>
  );
}

export default TripInfo;
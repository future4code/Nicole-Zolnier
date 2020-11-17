import React from 'react'

function TripCard(props) {
  return (
    <div>
        <img src={`https://picsum.photos/500/400/?a=${props.index}`} />
        <h1>{props.name}</h1>
        <p>{props.date}</p>
        <p>{props.description}</p>
    </div>
  );
}

export default TripCard;
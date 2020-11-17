import React from 'react'
import { useHistory } from 'react-router-dom';

function TripCard(props) {
    const history = useHistory()

    const goToApply = () => {
        history.push("/inscricao")
    }

  return (
    <div>
        <img alt="imagem bonita" src={`https://picsum.photos/500/400/?a=${props.index}`} />
        <h1>{props.name}</h1>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <button onClick={goToApply}>INSCREVER</button>
    </div>
  );
}

export default TripCard;
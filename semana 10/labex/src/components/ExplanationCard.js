import React from 'react'
import Card from 'react-bootstrap/Card'

function ExplanationCard(props) {

    return (
        <Card style={{ width: '18rem', textAlign: "center", backgroundColor: "black", color: "white", borderColor: "white" ,border: "1px" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.text}</Card.Title>
        </Card.Body>
      </Card>
    );
}
  
export default ExplanationCard;




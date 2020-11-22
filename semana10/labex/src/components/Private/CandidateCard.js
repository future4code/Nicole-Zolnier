import axios from 'axios'
import React from 'react'
import Buttons from './Buttons'
import { baseUrl } from '../../constants/urls'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: black;
`

function CandidateCard(props) {
  const token = localStorage.getItem("token")

  const decideCandidate = (answer) => {
    const body = {
      approve: answer
    }

    axios.put(`${baseUrl}/trips/${props.tripId}/candidates/${props.candidateId}/decide`, body, {
      headers: {
        auth: token
      }
    }).then((res) => {
      props.getTripDetails()
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <Card text="white" style={{ width: '300px', backgroundColor: "black" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.profession} , {props.age} years old</Card.Subtitle>
          <Card.Text>{props.reason}</Card.Text>
          <Buttons decideCandidate={decideCandidate} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CandidateCard;


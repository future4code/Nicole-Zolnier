import axios from 'axios'
import React from 'react'
import Buttons from './Buttons'
import {baseUrl} from '../../constants/urls'

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
      window.alert("Foi!")
      console.log(res)
      props.getTripDetails() }).catch(err => {
        console.log(err) 
        window.alert("deu erro")
      })
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.profession} , {props.age} anos</h5>
      <p>{props.reason}</p>
      <Buttons decideCandidate={decideCandidate} />
    </div>
  );
}

export default CandidateCard;
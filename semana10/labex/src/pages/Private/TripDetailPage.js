import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useHistory, useParams } from 'react-router-dom'
import {baseUrl} from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios'
import TripInfo from '../../components/Private/TripInfo'

function TripDetailPage() {
    const history = useHistory()

    const goToCandidateDetails = (candidateId) => {
    history.push(`/admin/viagens/detalhe/${id}/candidato/${candidateId}`)
  }

    useProtectedPage()

    const pathParams = useParams();
    const id = pathParams.id
    const token = localStorage.getItem("token")
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = () => {
        axios.get(`${baseUrl}/trip/${id}` , {
            headers: {
                auth: token
            }
        }).then(res => {
            console.log(res)
            setTrip(res.data.trip)
            setCandidates(res.data.trip.candidates)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <NavBarAdmin />
            <TripInfo planet={trip.planet} description={trip.description} date={trip.date} name={trip.name} duration={trip.durationInDays} />
            {candidates.map((item) => {
               return <h4 onClick={() => goToCandidateDetails(item.id)}>{item.name}</h4>
            })}
        </div>
    );
}

export default TripDetailPage;
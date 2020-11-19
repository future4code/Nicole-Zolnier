import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useParams } from 'react-router-dom'
import {baseUrl} from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios'
import TripInfo from '../../components/Private/TripInfo'
import CandidateCard from '../../components/Private/CandidateCard'

function TripDetailPage() {
   
    useProtectedPage()

    const pathParams = useParams();
    const id = pathParams.id
    const token = localStorage.getItem("token")
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])


    useEffect(() => {
        getTripDetails()
    }, [])

    const getTripDetails = () => {
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


    const renderCandidate = candidates.length !== 0 ? candidates.map((item) => {
        return <CandidateCard getTripDetails={getTripDetails} tripId={id} candidateId={item.id} reason={item.applicationText} profession={item.profession} age={item.age} country={item.country} name={item.name}/>
     }) : <div>nenhum candidato!</div>
    return (
        <div>
            <NavBarAdmin />
            <TripInfo planet={trip.planet} description={trip.description} date={trip.date} name={trip.name} duration={trip.durationInDays} />
            {renderCandidate}
        </div>
    );
}

export default TripDetailPage;
import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useParams } from 'react-router-dom'
import {baseUrl} from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios'
import TripInfo from '../../components/Private/TripInfo'
import TripCandidates from '../../components/Private/TripCandidates'

function TripDetailPage() {
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
                <TripCandidates country={item.country} name={item.name} age={item.age} reason={item.applicationText} profession={item.profession} />
            })}
        </div>
    );
}

export default TripDetailPage;
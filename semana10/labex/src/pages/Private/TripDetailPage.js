import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios'
import TripInfo from '../../components/Private/TripInfo'
import CandidateCard from '../../components/Private/CandidateCard'
import Loading from '../../components/Loading'
import {Typography} from '@material-ui/core'
import {MainContainer, Title, CandidateGrid, SpacedText, ApprovedName} from '../styles'

function TripDetailPage() {

    useProtectedPage()

    const pathParams = useParams();
    const id = pathParams.id
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [approved, setApproved] = useState([])


    useEffect(() => {
        getTripDetails()
    }, [])

    // função pra pegar os detalhes maneiros
    const getTripDetails = () => {
        setLoaded(false)
        axios.get(`${baseUrl}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(res => {
            setLoaded(true)
            setApproved(res.data.trip.approved)
            setTrip(res.data.trip)
            setCandidates(res.data.trip.candidates)
        }).catch(err => {
            console.log(err)
        })
    }


    const renderCandidate = candidates.length !== 0 ? candidates.map((item) => {
        return (<CandidateCard getTripDetails={getTripDetails} tripId={id} candidateId={item.id} reason={item.applicationText} profession={item.profession} age={item.age} country={item.country} name={item.name} />)
    }) : <SpacedText>No candidates</SpacedText>
    
    const renderApproved = approved.length !== 0 ? approved.map((item) => {
        return <ApprovedName>{item.name}</ApprovedName>
    }) : <SpacedText>No one was approved</SpacedText>
    return (
        <div>
            <NavBarAdmin />
            <MainContainer>
            <Title variant="h3">Trip Information</Title>
            {loaded ? <TripInfo planet={trip.planet} description={trip.description} date={trip.date} name={trip.name} duration={trip.durationInDays} /> : <Loading />}
            {loaded? <Typography variant="h5">Candidates</Typography> : null}
            {loaded? <CandidateGrid>{renderCandidate}</CandidateGrid> : null }
            {loaded? <Typography p={1} variant="h5">Approved Candidates</Typography> : null}
            {loaded? <div>{renderApproved}</div> : null}
            </MainContainer>
            
        </div>
    );
}

export default TripDetailPage;
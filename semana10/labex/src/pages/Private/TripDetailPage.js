import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios'
import TripInfo from '../../components/Private/TripInfo'
import CandidateCard from '../../components/Private/CandidateCard'
import Loading from '../../components/Loading'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'

const MainContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  height: 100vh;
`
const Title = styled(Typography)`
  margin: 1em;
`
const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
  margin-top: 1em;
`
const CandidateGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
`
const SpacedText = styled.p`
    padding: 0.5em;
`
const ApprovedName = styled.li`
    padding: 0.5em;
`


function TripDetailPage() {

    useProtectedPage()

    const pathParams = useParams();
    const id = pathParams.id
    const token = localStorage.getItem("token")
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [approved, setApproved] = useState([])


    useEffect(() => {
        getTripDetails()
    }, [])

    const getTripDetails = () => {
        setLoaded(false)
        axios.get(`${baseUrl}/trip/${id}`, {
            headers: {
                auth: token
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
        return (<CandidateGrid><CandidateCard getTripDetails={getTripDetails} tripId={id} candidateId={item.id} reason={item.applicationText} profession={item.profession} age={item.age} country={item.country} name={item.name} /></CandidateGrid>)
    }) : <SpacedText>No candidates</SpacedText>
    
    const renderApproved = approved.length !== 0 ? approved.map((item) => {
        return <ApprovedName>{item.name}</ApprovedName>
    }) : <SpacedText>No one was approved</SpacedText>
    return (
        <div>
            <NavBarAdmin />
            <MainContainer>
            <Title variant="h3">Informações da Viagem</Title>
            {loaded ? <TripInfo planet={trip.planet} description={trip.description} date={trip.date} name={trip.name} duration={trip.durationInDays} /> : <Loading />}
            {loaded? <Typography variant="h5">Candidates</Typography> : null}
            {loaded? <div>{renderCandidate}</div> : null }
            {loaded? <Typography p={1} variant="h5">Approved Candidates</Typography> : null}
            {loaded? <ul>{renderApproved}</ul> : null}
            </MainContainer>
            
        </div>
    );
}

export default TripDetailPage;
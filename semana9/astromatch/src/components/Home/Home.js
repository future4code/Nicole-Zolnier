import ProfileCard from './ProfileCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Buttons from './Buttons'
import styled , {keyframes} from 'styled-components'
import Loading from './Loading'


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"


function Home() {
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios.get(`${baseUrl}/person`).then((res) => {
      setProfile(res.data.profile)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  const choosePerson = (answer) => {
    if (answer) {
      setYes(true)
    } else {
      setNo(true)
    }

    const body = {
      id: profile.id,
      choice: answer
    }

    axios.post(`${baseUrl}/choose-person`, body).then((res) => {
      getProfile()
      setYes(false)
      setNo(false)
    }).catch((err) => {
      console.log(err.message)
    })

  }

  return (
    <div>
      {!profile ? <Loading /> : <ProfileCard profile={profile} />}
      <Buttons no={no} yes={yes} choosePerson={choosePerson} />
    </div>
  );
}

export default Home;
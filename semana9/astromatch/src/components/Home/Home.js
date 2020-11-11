import ProfileCard from './ProfileCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Buttons from './Buttons'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"

function Home() {

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
    const body = {
        id: profile.id,
        choice: answer
    }

    axios.post(`${baseUrl}/choose-person`, body).then((res) => {
      getProfile()
    }).catch((err) => {
      console.log(err.message)
    })

  }

  return (
    <div>
      <ProfileCard profile={profile} />
      <Buttons choosePerson={choosePerson} />
    </div>
  );
}

export default Home;
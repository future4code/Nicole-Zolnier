import ProfileCard from './ProfileCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
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
    const id = profile.id
    const headers = { headers: { "Content-type": "application/json" } }

    let body
    if (answer === "no") {
      body = {
        id: id,
        choice: false
      }
    } else if (answer === "yes") {
      body = {
        id: id,
        choice: true
      }
    }

    axios.post(`${baseUrl}/choose-person`, body, headers).then((res) => {
      
    }).catch((err) => {
      console.log(err.message)
    })

    getProfile()

  }

  return (
    <div>
      <p>Home</p>
      <ProfileCard profile={profile} />
      <Buttons choosePerson={choosePerson} />
    </div>
  );
}

export default Home;
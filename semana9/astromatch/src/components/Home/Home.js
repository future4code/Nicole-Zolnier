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

  const choosePerson = (id, answer) => {
    const body = {
        id: id,
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
      <p>Home</p>
      <ProfileCard profile={profile} />
      <Buttons id={profile.id} choosePerson={choosePerson} />
    </div>
  );
}

export default Home;
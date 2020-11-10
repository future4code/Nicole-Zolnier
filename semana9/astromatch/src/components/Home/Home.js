import Buttons from './Buttons'
import ProfileCard from './ProfileCard'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Home() {

  const [profile, setProfile] = useState({})

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:nicole/person").then((res) => {
      setProfile(res.data.profile)
    }).catch((err) => {
      console.log(err.message)
    })

  }

  return (
    <div>
      <p>Home</p>
      <button onClick={getProfile}>Clica em mim</button>
      <ProfileCard profile={profile}/>
    </div>
  );
}

export default Home;
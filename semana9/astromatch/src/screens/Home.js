import ProfileCard from '../components/Home/ProfileCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Buttons from '../components/Home/Buttons'
import Loading from '../components/Home/Loading'
import NavBar from '../components/NavBar'
import {Snackbar} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { baseUrl } from "../constants/urls";


function Home(props) {
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)
  const [profile, setProfile] = useState({})
  const [isMatch, setIsMatch] = useState(false)
  const [animation, setAnimation] =useState()

  // didmount
  useEffect(() => {
    getProfile()
  }, [])

  // função de pegar um perfil aleatorio
  const getProfile = () => {
    axios.get(`${baseUrl}/person`).then((res) => {
      setProfile(res.data.profile)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  // yes / coração = true
  // no / x = false

  // função de mudar o icon quando passar o mouse
  const mouseOverIcon = (answer) => {
    if (answer) {
      setYes(true)
    } else {
      setNo(true)
    }
  }

  // função de desmudar o icon quando não passar o mouse
  const mouseOutIcon = () => {
    setYes(false)
    setNo(false)
  }

  // função pra fechar o alert
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsMatch(false);
  };

  // função pra escolher se sim ou se nao
  const choosePerson = (answer) => {

    if(answer){
      setYes(true)

      setAnimation("right")
    } else{
      setNo(true)

      setAnimation("left")
    }
   
    const body = {
      id: profile.id,
      choice: answer
    }

    axios.post(`${baseUrl}/choose-person`, body).then((res) => {
      setIsMatch(res.data.isMatch)
      console.log(res.data.isMatch)
      getProfile()
      setYes(false)
      setNo(false)
    }).catch((err) => {
      console.log(err.message)
    })

  }

  return (
    <div>
      <Snackbar open={isMatch} autoHideDuration={1500} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleClose}>
        <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
          It's a match!
        </Alert>
      </Snackbar>
      <NavBar getProfile={getProfile} currentPage={props.currentPage} goToHome={props.goToHome} goToMatches={props.goToMatches}/>
      {!profile ? <Loading /> : <ProfileCard animationDirection={animation} profile={profile} />}
      {!profile ? null : <Buttons mouseOverIcon={mouseOverIcon} mouseOutIcon={mouseOutIcon} no={no} yes={yes} choosePerson={choosePerson} /> }
    </div>
  );
}

export default Home;
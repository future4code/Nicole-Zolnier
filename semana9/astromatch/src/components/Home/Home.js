import ProfileCard from './ProfileCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Buttons from './Buttons'
import Loading from './Loading'
import NavBar from '../NavBar'
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home(props) {
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)
  const [profile, setProfile] = useState({})
  const [isMatch, setIsMatch] = useState(false)

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

  const mouseOverIcon = (answer) => {
    if (answer) {
      setYes(true)
    } else {
      setNo(true)
    }
  }

  const mouseOutIcon = () => {
    setYes(false)
    setNo(false)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsMatch(false);
  };

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
        <Alert onClose={handleClose} severity="success">
          It's a match!
        </Alert>
      </Snackbar>
      <NavBar getProfile={getProfile} currentPage={props.currentPage} goToHome={props.goToHome} goToMatches={props.goToMatches}/>
      {!profile ? <Loading /> : <ProfileCard profile={profile} />}
      {!profile ? null : <Buttons mouseOverIcon={mouseOverIcon} mouseOutIcon={mouseOutIcon} no={no} yes={yes} choosePerson={choosePerson} /> }
    </div>
  );
}

export default Home;
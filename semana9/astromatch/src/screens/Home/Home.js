import ProfileCard from '../../kiddos/Home/ProfileCard/ProfileCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Buttons from '../../kiddos/Home/Buttons/Buttons'
import Error from '../../components/Errors/ErrorHome'
import NavBar from '../../components/NavBar/NavBar'
import MatchAlert from '../../kiddos/Home/MatchAlert'
import { baseUrl } from "../../constants/urls";
import Loading from '../../components/Loading/Loading'


function Home(props) {
  // icons
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)
  // profile da api
  const [profile, setProfile] = useState({})
  // coisinha pra salvar a res do post e fazer o alert
  const [isMatch, setIsMatch] = useState(false)
  // animações
  const [swipeLeft, setSwipeLeft] = useState(false)
  const [swipeRight, setSwipeRight] = useState(false)
  // loading
  const [loaded, setLoaded] = useState(false)

  // didmount
  useEffect(() => {
    getProfile()
  }, [])

  // função de pegar um perfil aleatorio
  const getProfile = () => {
    setLoaded(false)
    axios.get(`${baseUrl}/person`).then((res) => {
      setProfile(res.data.profile)
      setLoaded(true)
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
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsMatch(false);
  };

  // função pra escolher se sim ou se nao
  const choosePerson = (answer) => {
    // seta a mudança do botao no onclick e o swipe correto
    if(answer){
      setYes(true)
      setSwipeLeft(true)
    } else{
      setNo(true)
      setSwipeRight(true)
    }
   
    const body = {
      id: profile.id,
      choice: answer
    }

    axios.post(`${baseUrl}/choose-person`, body).then((res) => {
      setIsMatch(res.data.isMatch)
      getProfile()
      setYes(false)
      setNo(false)
      setSwipeRight(false)
      setSwipeLeft(false)
    }).catch((err) => {
      console.log(err.message)
    })

  }

  // renderizacao condicional muito louca que deu certo na base da fé
  // se não tiver carregado, manda o loading que é uma animação
  // se tiver carregado, mas sem profile, manda o erro
  // se tiver carregado e com profile, manda o card
  return (
    <div>
      <MatchAlert open={isMatch} close={handleClose} />
      
      <NavBar getProfile={getProfile} currentPage={props.currentPage} goToHome={props.goToHome} goToMatches={props.goToMatches}/>
      {loaded? (!profile ? <Error /> : <ProfileCard swipeLeft={swipeLeft} swipeRight={swipeRight} profile={profile} />) : <Loading />}
      {loaded? (!profile ? null : <Buttons mouseOverIcon={mouseOverIcon} mouseOutIcon={mouseOutIcon} no={no} yes={yes} choosePerson={choosePerson} />) : <Loading /> }
    </div>
  );
}

export default Home;
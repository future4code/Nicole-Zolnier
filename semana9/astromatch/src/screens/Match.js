import MatchCard from '../components/Matches/MatchCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Message from '../components/Matches/Message'
import ItsMatch from '../components/Matches/ItsMatch'
import NavBar from '../components/NavBar/NavBar'
import { baseUrl } from "../constants/urls";

function Match(props) {
  // state pra guardar as matches da função
  const [matches, setMatches] = useState([])

  // função para pegar as matches
  const getMatches = () => {
    axios.get(`${baseUrl}/matches`).then((res) => {
      setMatches(res.data.matches)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  // didmount
  useEffect(() => {
    getMatches()
  }, [])

  // didupdate
  useEffect(() => {
    getMatches()
  }, [matches])

  // map dos matches que retorna o card
  const renderMatches = matches.map((item) => {
    return <MatchCard key={item.id} name={item.name} photo={item.photo}/>
  })

  return (
    // renderização condicional analisando se tem match ou nao
    <div>
      <NavBar getMatches={getMatches} currentPage={props.currentPage} goToHome={props.goToHome} goToMatches={props.goToMatches}/>
      {matches.length? <ItsMatch /> : null }
      {matches.length? renderMatches : <Message /> }
    </div>
  );
}

export default Match;
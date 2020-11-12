import MatchCard from './MatchCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Message from './Message'
import ItsMatch from './ItsMatch'
import NavBar from '../NavBar'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"

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
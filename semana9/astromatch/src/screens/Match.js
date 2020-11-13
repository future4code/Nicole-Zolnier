import MatchCard from '../components/Matches/MatchCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Message from '../components/Matches/Message'
import ItsMatch from '../components/Matches/ItsMatch'
import NavBar from '../components/NavBar/NavBar'
import { baseUrl } from "../constants/urls"
import styled from 'styled-components'

const ScrollBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  max-height: 495px;

  /* width */
  ::-webkit-scrollbar {
  width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  background: white; 
  border-radius: 10px;
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
  background: #FE039D; 
  border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  background: #66C7F4; 
  border-radius: 10px;
  } 
`


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
      {matches.length? <ScrollBar>{renderMatches}</ScrollBar>  : <Message /> }
      
    </div>
  );
}

export default Match;
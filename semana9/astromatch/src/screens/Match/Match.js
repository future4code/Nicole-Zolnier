import MatchCard from '../../kiddos/Matches/MatchCard/MatchCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Error from '../../components/Errors/ErrorMatch'
import ItsMatch from '../../kiddos/Matches/ItsMatch'
import NavBar from '../../components/NavBar/NavBar'
import { baseUrl } from "../../constants/urls"
import {ScrollBar} from './styled'
import Loading from '../../components/Loading/Loading'


function Match(props) {
  const [loaded, setLoaded] = useState(false)

  // state pra guardar as matches da função
  const [matches, setMatches] = useState([])
  // função para pegar as matches
  const getMatches = () => {
    axios.get(`${baseUrl}/matches`).then((res) => {
      setMatches(res.data.matches)
      setLoaded(true)
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
      {loaded? (matches.length? ( <div><ItsMatch /> <ScrollBar>{renderMatches}</ScrollBar></div>) : <Error matches={matches} /> ) : <Loading /> }
      
    </div>
  );
}

export default Match;
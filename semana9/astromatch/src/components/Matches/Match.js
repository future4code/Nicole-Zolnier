import MatchCard from './MatchCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Message from './Message'
import ItsMatch from './ItsMatch'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"

function Match() {
  const [matches, setMatches] = useState([])

  const getMatches = () => {
    axios.get(`${baseUrl}/matches`).then((res) => {
      setMatches(res.data.matches)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  useEffect(() => {
    getMatches()
  }, [])

  useEffect(() => {
    getMatches()
  }, [matches])

  const renderMatches = matches.map((item) => {
    return <MatchCard key={item.id} name={item.name} photo={item.photo}/>
  })

  return (
    <div>
      {!matches.length? null : <ItsMatch />}
      {!matches.length? <Message /> : renderMatches }
    </div>
  );
}

export default Match;
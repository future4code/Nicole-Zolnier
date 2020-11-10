import MatchCard from './MatchCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

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

  const renderMatches = matches.map((item) => {
    return <MatchCard key={item.id} name={item.name} photo={item.photo}/>
  })
  return (
    <div>
      {renderMatches}
    </div>
  );
}

export default Match;
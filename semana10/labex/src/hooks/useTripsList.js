import { useState, useEffect } from 'react'
import axios from 'axios'
import {baseUrl} from '../constants/urls'

// custom hook da fnção get trips pq eu uso ela em varios lugares
export const useTripsList = () => {
  const [trips, setTrips] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    axios.get(`${baseUrl}/trips`).then((response) => {
      setLoaded(true)
      setTrips(response.data.trips)
    })
  }, [])

  return [trips, loaded]
}
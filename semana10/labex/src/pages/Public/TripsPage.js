import React from 'react'
import NavBar from '../../components/NavBar'
import TripGridCard from '../../components/TripGridCard'


function TripsPage() {  

  return (
    <div>
        <NavBar />
        <p>Trips</p>
        <TripGridCard />
    </div>
  );
}

export default TripsPage;
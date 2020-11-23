import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar'
import TripGridCard from '../../components/TripGridCard'


function TripsPage() {  

  return (
    <div>
        <NavBar />
        <TripGridCard />
        <Footer />
    </div>
  );
}

export default TripsPage;
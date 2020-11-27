import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar'
import CarouselFeature from '../../components/CarouselFeature'
import HowItWorks from '../../components/HowItWorks';
import Slogan from '../../components/Slogan'

function LandingPage() {
  return (
    <div>
      <NavBar />
      <CarouselFeature />
      <Slogan />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;
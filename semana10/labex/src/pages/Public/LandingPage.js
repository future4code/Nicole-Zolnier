import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import CarouselFeature from '../../components/CarouselFeature'
import HowItWorks from '../../components/HowItWorks';

function LandingPage() {
  return (
    <div>
      <NavBar />
      <CarouselFeature />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;
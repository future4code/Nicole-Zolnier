import React from 'react'
import ExplanationCard from './ExplanationCard'
import choosing from '../assets/choosing.gif'
import applying from '../assets/applying.gif'
import waiting from '../assets/waiting.gif'
import {Title, HowContainer, CardsGrid} from './styles'

function HowItWorks() {

    return (
      <HowContainer>
          <Title variant="h3" align="center">How to use our services?</Title>
          <Title variant="h4" align="center">Tony Stark will show how to use our services in just 3 steps</Title>
          <CardsGrid>
            <ExplanationCard text="Go to the trips page and choose one trip" image={choosing} />
            <ExplanationCard text="Apply to the one you liked the most" image={applying} />
            <ExplanationCard text="Wait for our response (don't worry, we reply fast)" image={waiting} />
          </CardsGrid>
      </HowContainer>
    );
}
  
  export default HowItWorks;
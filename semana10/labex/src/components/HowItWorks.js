import React from 'react'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'
import ExplanationCard from './ExplanationCard'
import choosing from '../assets/choosing.gif'
import applying from '../assets/applying.gif'
import waiting from '../assets/waiting.gif'


const Title = styled(Typography)`
  padding: 0.5em;
`
const MainContainer = styled.div`
    background-color: black;
    color: white;
`

const CardsGrid = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 4em;
    padding-bottom: 6em;
`

function HowItWorks() {

    return (
      <MainContainer>
          <Title variant="h3" align="center">How to use our services?</Title>
          <Title variant="h4" align="center">Tony Stark will show how to use our services in just 3 steps</Title>
          <CardsGrid>
            <ExplanationCard text="Go to the trips page and choose one trip" image={choosing} />
            <ExplanationCard text="Apply to the one you liked the most" image={applying} />
            <ExplanationCard text="Wait for our response (don't worry, we reply fast)" image={waiting} />
          </CardsGrid>
      </MainContainer>
    );
}
  
  export default HowItWorks;
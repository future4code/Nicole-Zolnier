import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import tony from '../../assets/tony.jpg'
import avengers from '../../assets/avengers.png'
import styled, { keyframes } from 'styled-components'
import { Typography } from '@material-ui/core'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const AboutImg = styled.img`
  width: 50%;
  margin-right: 6em;
  padding: 3em;
  
`

const Tony = styled.img`
  width: 25%;
  align-self: flex-end;
  margin-bottom: 6em;
`
const MainContainer = styled.div`
  background-color: black;
  color: white;
`

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7.5em;
`
const AboutText = styled.p`
  padding: 1.5em;
  text-align: end;
  font-size: 1.3rem;
  margin-right: 2em;
`

const MemoriamContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

const Quote = styled.p`
  padding: 3em;
  text-align: start;
  font-size: 1.5rem;
  margin-left: 2em;
  margin-right: 12em;
  padding-bottom: 0;
  cursor: default;
`
const Credits = styled.p`
  text-align: end;
  padding: 3em;
  font-size: 1.3rem;
  margin-right: 10em;
  padding-top: 0;
  margin-bottom: 3em;
  cursor: default;
`

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <Typography align="center" variant="h3" gutterBottom>
          About starkX
      </Typography>
        <AboutContainer>
          <AboutImg src={avengers} />
          <AboutText>
          After the Blip (when half the world's population disappeared), many people were afraid of the space and even scared to travel by plane. StarkX wants to change that and open up a world of fun opportunities for the people. Unlike our competitors who want to explore other planets, we believe that they must be preserved and appreciate for their individuality in an ecological way. Outer space can have many incredible activities for humans and planets should be preserved rather than explored. Therefore, for each trip, we donate 1% of sales to a planet preservation NGO (non-gonvernmental organization).</AboutText>
        </AboutContainer>

        <Typography align="center" variant="h3" gutterBottom>
          In memoriam
        </Typography>

        <MemoriamContainer>
          <div>
            <Quote><i>"You can take away my house, all my tricks and toys.<br></br> One thing you can’t take away… I am Iron Man.” </i></Quote>
            <Credits>- Tony Stark</Credits>
          </div>

          <Tony src={tony} />
        </MemoriamContainer>
      </MainContainer>
      <Footer />
    </div>
  )
}

export default AboutUsPage;
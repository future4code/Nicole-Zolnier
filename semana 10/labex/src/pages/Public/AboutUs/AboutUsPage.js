import React from 'react'
import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer/Footer'
import tony from '../../../assets/tony.jpg'
import avengers from '../../../assets/avengers.png'
import { Typography } from '@material-ui/core'
import {AboutImg, Tony, MainContainer, AboutContainer, AboutText, MemoriamContainer, Quote, Credits} from './styles'

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
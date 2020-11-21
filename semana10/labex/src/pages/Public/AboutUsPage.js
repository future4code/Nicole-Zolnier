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
  font-size: 1.3rem;
  margin-right: 8em;
  padding-bottom: 0;
`
const Credits = styled.p`
  text-align: end;
  padding: 3em;
  font-size: 1.3rem;
  margin-right: 8em;
  padding-top: 0;
  margin-bottom: 3em;
`

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <Typography align="center" variant="h3" gutterBottom>
          Sobre nós
      </Typography>
        <AboutContainer>
          <AboutImg src={avengers} />
          <AboutText>
            Depois dos acontecimentos do Blip (quando metade da população mundial sumiu), muitas pessoas ficaram com medo do espaço e não queriam mais nem viajar de avião. Nós da StarkX queremos mudar isso e abrir um mundo de oportunidades de diversão para as pessoas. Ao contrário de nossos competidores que querem explorar os outros planetas, nós queremos aprecia-los e mostrar a sua individualidade. Acreditamos que o espaço sideral tenha muitas atividades incríveis e os planetas devem ser preservados em vez de explorados. Por isso, para cada viagem, nós doamos 0.5% das vendas para uma ONG de preservação de planetas.</AboutText>
        </AboutContainer>

        <Typography align="center" variant="h3" gutterBottom>
          In memoriam
        </Typography>

        <MemoriamContainer>
          <div>
            <Quote><i>“Você pode tirar meus trajes, você pode tirar a minha casa, <br></br> mas há uma coisa que você nunca pode tirar de mim: eu sou o Homem de Ferro!” </i></Quote>
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
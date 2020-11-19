import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import tony from '../../assets/tony.jpg'
import spaceship from '../../assets/spaceship.jpg'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const AboutImg = styled.img`
  width: 30%;
`

const Tony = styled.img`
  width: 20%;
`


function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <div>
        <Typography variant="h3" gutterBottom>
          Sobre nós
      </Typography>
        <AboutImg src={spaceship} />
        <Typography variant="body1" gutterBottom>
          Depois dos acontecimentos do Blip (quando metade da população mundial sumiu), muitas pessoas ficaram com medo do espaço e não queriam mais nem viajar de avião. Nós da StarkX queremos mudar isso e abrir um mundo de oportunidades de diversão para as pessoas. Ao contrário de nossos competidores que querem explorar os outros planetas, nós queremos aprecia-los e mostrar a sua individualidade. Acreditamos que o espaço sideral tenha muitas atividades incríveis e os planetas devem ser preservados em vez de explorados. Por isso, para cada viagem, nós doamos 0.5% das vendas para uma ONG de preservação de planetas.</Typography>
      </div>


      <div>
        <Typography variant="h3" gutterBottom>
          In memoriam
      </Typography>
        <Typography variant="body1" gutterBottom>“Você pode tirar meus trajes, você pode tirar a minha casa, mas há uma coisa que você nunca pode tirar de mim: eu sou o Homem de Ferro!” - Tony Stark</Typography>
        <Tony src={tony} />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUsPage;
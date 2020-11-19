import Button from 'react-bootstrap/Button'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import earth from '../assets/earth.jpg'
import galaxy from '../assets/galaxy.jpg'
import meteorites from '../assets/meteorites.jpg'
import styled from 'styled-components'

const Title = styled.h1`
  text-shadow: 2px 1px 2px rgba(58, 58, 58, 1);
`


function CarouselFeature() {
  const history = useHistory()

  const goToTrips = () => {
    history.push("/viagens")
  }

  return (
    <div>
      <Col md={14}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={galaxy} alt="First slide" />
            <Carousel.Caption>
              <Title>A galáxia não estará mais tão distante assim</Title>
              <Button className="w-50" onClick={goToTrips}onClick={goToTrips} size="lg" variant="light">VER VIAGENS</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={meteorites} alt="Second slide" />

            <Carousel.Caption>
              <Title>Cansade de ficar na seca? Que tal uma chuva de meteoros?</Title>
              <Button className="w-50" onClick={goToTrips} size="lg" onClick={goToTrips} variant="light">VER VIAGENS</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={earth} alt="Third slide" />

            <Carousel.Caption>
              <Title>Eu posso te mostrar uma galáxia de oportunidades!</Title>
              <Button className="w-50" onClick={goToTrips} size="lg" onClick={goToTrips} variant="light">VER VIAGENS</Button>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Col>

    </div>
  );
}

export default CarouselFeature;
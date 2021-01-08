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
    history.push("/trips")
  }

  return (
    <div>
      <Col md={14}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={galaxy} alt="First slide" />
            <Carousel.Caption>
              <Title>The galaxy won't be that far away anymore</Title>
              <Button className="w-50" onClick={goToTrips}onClick={goToTrips} size="lg" variant="light">SEE TRIPS</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={meteorites} alt="Second slide" />

            <Carousel.Caption>
              <Title>Tired of the dry spell? How about seeing a meteor shower?</Title>
              <Button className="w-50" onClick={goToTrips} size="lg" onClick={goToTrips} variant="light">SEE TRIPS</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={earth} alt="Third slide" />

            <Carousel.Caption>
              <Title>I can show you the.... GALAXY!</Title>
              <Button className="w-50" onClick={goToTrips} size="lg" onClick={goToTrips} variant="light">SEE TRIPS</Button>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Col>

    </div>
  );
}

export default CarouselFeature;
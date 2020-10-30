import React from 'react'
import logo from '../img/logo.svg'
import styled from 'styled-components'

const Logo = styled.img`
    width: 5%;
`
const MotherDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100vw;
    background-color: black;
    align-items: center;
`
const Title = styled.h1`
    padding-left: 0.2em;
    color: white;
    font-size: 2.5rem;
`

class Header extends React.Component {
  
  render() {
    return (
      <MotherDiv>
        <Logo src={logo} />
        <Title>Labefy</Title>
      </MotherDiv>
    );
  }
}

export default Header;
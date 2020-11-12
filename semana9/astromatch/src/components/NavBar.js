import logo from '../assets/logo-astromatch.svg'
import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import goBack from '../assets/go-back.svg'
import matches from '../assets/matches.svg'
import axios from "axios";
import clean from '../assets/clean.svg'

const Clean = styled.img`
  width: 10%;
  padding: 0;
  margin: 0;
`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
  border-bottom: 1px solid grey;
`

const Logo = styled.img`
  width: 50%;
  display: flex;
  justify-self: center;
`

const GoBack = styled.img`
width: 10%;
`

const Matches = styled.img`
width: 10%;
`

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"

function NavBar(props) {
  const clearAll = () => {
    const beSure = window.confirm("Tem certeza que quer apagar todos os matches e perfis vistos?")

    if(beSure) {
      
        axios.put(`${baseUrl}/clear`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })
    }
}

    return (
      <Div>
        {props.currentPage === "home"? (<Tooltip title="Resetar" arrow>
        <Clean src={clean}onClick={clearAll}/> 
    </Tooltip>)
        : <GoBack src={goBack} onClick={props.goToHome} />}
        <Logo src={logo}/>
        {props.currentPage === "home"? <Matches src={matches} onClick={props.goToMatches}/> : <Clean src={clean} onClick={clearAll}/>}
      </Div>
    );
  }
  
export default NavBar;
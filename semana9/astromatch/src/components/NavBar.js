import logo from '../assets/logo-astromatch.svg'
import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import goBack from '../assets/go-back.svg'
import matches from '../assets/matches.svg'
import axios from "axios";
import pinkClean from '../assets/pink-clean.svg'
import blueClean from '../assets/blue-clean.svg'


const Clean = styled.img`
  width: 12.4%;
`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
  border-bottom: 1px solid #606060;
`

const Logo = styled.img`
  width: 50%;
  display: flex;
  justify-self: center;
`

const GoBack = styled.img`
width: 12%;
`

const Matches = styled.img`
width: 12%;
`

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"

function NavBar(props) {

  // função para limpar todos os matches e perfis vistos
  const clearAll = () => {
    const beSure = window.confirm("Tem certeza que quer apagar todos os matches e perfis vistos?")

    if(beSure) {
      
        axios.put(`${baseUrl}/clear`).then((res) => {
            console.log(res)
            // se a pagina for home, vai chamar a função getProfile, se nao chama a de matches
            if(props.currentPage === "home") {
              props.getProfile()
            } else {
              props.getMatches()
            }
            alert("Deletei tudo!")
        }).catch((err) => {
            console.log(err.message)
        })
    }
}

    return (
      // um monte de ternario bem doido
      <Div>
        {props.currentPage === "home"? (<Tooltip title="Resetar" arrow>
        <Clean src={pinkClean}onClick={clearAll}/> 
    </Tooltip>)
        : <GoBack src={goBack} onClick={props.goToHome} />}
        <Logo src={logo}/>
        {props.currentPage === "home"? <Matches src={matches} onClick={props.goToMatches}/> : 
        (<Tooltip title="Resetar" arrow>
        <Clean src={blueClean} onClick={clearAll}/>
    </Tooltip>)}
      </Div>
    );
  }
  
export default NavBar;
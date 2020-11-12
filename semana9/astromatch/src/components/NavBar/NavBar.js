import React from 'react'
import axios from "axios";
import Tooltip from '@material-ui/core/Tooltip'
import goBack from '../../assets/go-back.svg'
import matches from '../../assets/matches.svg'
import logo from '../../assets/logo-astromatch.svg'
import pinkClean from '../../assets/pink-clean.svg'
import blueClean from '../../assets/blue-clean.svg'
import { baseUrl } from '../../constants/urls'
import {Clean, NavContainer, Logo, GoBack, Matches} from './styledNav'


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
      <NavContainer>
        {props.currentPage === "home"? (<Tooltip title="Resetar" arrow>
        <Clean src={pinkClean}onClick={clearAll}/> 
    </Tooltip>)
        : <GoBack src={goBack} onClick={props.goToHome} />}
        <Logo src={logo}/>
        {props.currentPage === "home"? <Matches src={matches} onClick={props.goToMatches}/> : 
        (<Tooltip title="Resetar" arrow>
        <Clean src={blueClean} onClick={clearAll}/>
    </Tooltip>)}
      </NavContainer>
    );
  }
  
export default NavBar;
import React from 'react'
import styled from 'styled-components'
import {hotPink, notBlack} from '../constants/colors'

const CreditsDiv = styled.div`
  padding: 1em;
  display: flex;
  justify-content: flex-end;
`

const Credits = styled.a`
  text-decoration: none;
  color: ${notBlack};
  &:hover {
    color: ${hotPink};
  }
`

function Footer() {
  return (
    <CreditsDiv>
        <Credits target="_blank" href="https://github.com/future4code/Nicole-Zolnier">Desenvolvido por: Nicole Zolnier</Credits>
    </CreditsDiv>

  )

}
  
export default Footer;
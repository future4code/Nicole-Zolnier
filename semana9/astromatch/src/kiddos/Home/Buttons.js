import React from 'react'
import greyYes from '../../assets/grey-like.svg'
import greyNo from '../../assets/grey-dislike.svg'
import coloredYes from '../../assets/painted-like.svg'
import coloredNo from '../../assets/painted-dislike.svg'
import styled from 'styled-components'

const Icon = styled.img`
  width: 20%;
  cursor: pointer;
  &:hover {
    width: 21%
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function Buttons(props) {
  // renderização dos icons
  const yesIcon = props.yes ? (coloredYes) : (greyYes)

  const noIcon = props.no ? (coloredNo) : (greyNo)

  return (
      <ButtonContainer>
        <Icon src={noIcon} onMouseOver={() => props.mouseOverIcon(false)} onMouseOut={props.mouseOutIcon} onClick={() => props.choosePerson(false)}/>
        <Icon src={yesIcon} onMouseOver={() => props.mouseOverIcon(true)} onMouseOut={props.mouseOutIcon} onClick={() => props.choosePerson(true)}/>
      </ButtonContainer>
    );
  }
  
export default Buttons;
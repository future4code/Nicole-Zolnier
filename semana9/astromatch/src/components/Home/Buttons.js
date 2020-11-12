import React from 'react'
import greyYes from '../../assets/grey-like.svg'
import greyNo from '../../assets/grey-dislike.svg'
import coloredYes from '../../assets/painted-like.svg'
import coloredNo from '../../assets/painted-dislike.svg'
import styled from 'styled-components'


const Icon = styled.img`
  width: 20%;
`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function Buttons(props) {
  const yesIcon = props.yes ? (coloredYes) : (greyYes)

  const noIcon = props.no ? (coloredNo) : (greyNo)

  return (
      <Div>
        <Icon src={noIcon} onMouseOver={() => props.mouseOverIcon(false)} onMouseOut={props.mouseOutIcon} onClick={() => props.choosePerson(false)}/>
        <Icon src={yesIcon} onMouseOver={() => props.mouseOverIcon(true)} onMouseOut={props.mouseOutIcon} onClick={() => props.choosePerson(true)}/>
      </Div>
    );
  }
  
export default Buttons;
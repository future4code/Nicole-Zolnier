import React from 'react'
import greyYes from '../../../assets/grey-like.svg'
import greyNo from '../../../assets/grey-dislike.svg'
import coloredYes from '../../../assets/painted-like.svg'
import coloredNo from '../../../assets/painted-dislike.svg'
import {Icon, ButtonContainer} from './styled'

function Buttons(props) {
  // renderização dos icons
  const yesIcon = props.yes ? (coloredYes) : (greyYes)

  const noIcon = props.no ? (coloredNo) : (greyNo)

  return (
    <ButtonContainer>
      <Icon src={noIcon} onMouseOver={() => props.mouseOverIcon(false)} onMouseOut={props.mouseOutIcon} onClick={() => props.choosePerson(false)} />
      <Icon src={yesIcon} onMouseOver={() => props.mouseOverIcon(true)} onMouseOut={props.mouseOutIcon} onClick={() => props.choosePerson(true)} />
    </ButtonContainer>
  );
}

export default Buttons;
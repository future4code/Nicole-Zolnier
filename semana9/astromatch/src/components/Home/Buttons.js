import React from 'react'
import greyYes from '../../assets/grey-like.svg'
import greyNo from '../../assets/grey-dislike.svg'
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
    return (
      <Div>
        <Icon src={greyNo} onClick={() => props.choosePerson(false)}/>
        <Icon src={greyYes} onClick={() => props.choosePerson(true)}/>
      </Div>
    );
  }
  
export default Buttons;
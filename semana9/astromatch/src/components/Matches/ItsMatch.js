import React from 'react'
import styled from 'styled-components'
import match from '../../assets/match.svg'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const MatchIcon = styled.img`
    width: 10%;
`

const Text = styled.h3`
    text-align: center;
    color: #191919;
`

function ItsMatch() {
  return (
    <Div>
        <MatchIcon src={match}/>
       <Text>It's a match!</Text>
    </Div>

  )


}
  
export default ItsMatch;
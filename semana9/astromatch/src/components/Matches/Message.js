import React from 'react'
import styled, { keyframes } from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    margin: 1em;
`

const YouUgly = styled.h3`
    text-align: center;
    color: #606060;
`
const Dots = styled.div`
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`
const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const Dot = styled.div`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fe029d;
  animation: ${fade} 0.8s ease-in-out alternate infinite;
  &:nth-of-type(1) {
  animation-delay: -0.4s;
}
`

function Message() {
  return (
    <Div>
        <Dots>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </Dots>
       <YouUgly>Eita! Até agora nenhuma match, que tal passar um desodorante?</YouUgly>
    </Div>

  )


}
  
export default Message;
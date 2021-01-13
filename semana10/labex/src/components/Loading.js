import React from 'react'
import styled, {keyframes} from 'styled-components'

const AnimationContainer = styled.div`
  padding: 10em;
`

const spin = keyframes`
    50%,
    100% {
      transform: rotate(360deg);
    }
`

const fill = keyframes`
    25%,
    50% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
`

const Animation = styled.div`
    display: flex;
    justify-self: center;
    width: 5em;
    height: 5em;
    border: 3px solid #67C7EB;
    overflow: hidden;
    animation: ${spin} 3s ease infinite;
    &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 5em;
    height: 5em;
    background-color: hsl(196, 77%, 66%, 0.75);
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: ${fill} 3s linear infinite;
  }
` 

function Loading() {
  return ( <AnimationContainer>
    <Animation></Animation>
  </AnimationContainer>

  )

}

export default Loading;
import React from 'react'
import styled, {keyframes} from 'styled-components'

const AnimationContainer = styled.div`
    dispaly: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
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
    position: relative;
    width: 2em;
    height: 2em;
    border: 3px solid #3cefff;
    overflow: hidden;
    animation: ${spin} 3s ease infinite;
    &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 2em;
    height: 2em;
    background-color: hsla(185, 100%, 62%, 0.75);
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: ${fill} 3s linear infinite;
  }
` 

function Loading() {
  return (
    <AnimationContainer>
        <Animation></Animation>
    </AnimationContainer>
  );
}

export default Loading;
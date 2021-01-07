import React from 'react'
import styled, {keyframes} from 'styled-components'

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
`

const Svg = styled.svg`
    width: 3.75em;
    animation: 1.5s ${spin} ease infinite;
`
  
const Ring = styled.circle`
    fill: none;
    stroke: #FF936A;
    stroke-width: 2;
`
const Ball = styled.circle`
    fill: #FF4500;
    stroke: none;
`

function Loading() {
    return (<Svg viewBox="0 0 50 50">
    <Ring cx="25" cy="25" r="20"></Ring>
    <Ball cx="25" cy="5" r="3.5"></Ball>
  </Svg>

    )
}

export default Loading;
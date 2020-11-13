import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
`
export const Animation = styled.div`
    border: 6px solid #C1FFFF;
    border-top-color: #66C7F4;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: ${spin} 1s linear infinite;
`
 

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin: 1em;
`



import styled, { keyframes } from 'styled-components'
import {skyBlue, softBlue} from '../../constants/colors'

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
`
export const Animation = styled.div`
    border: 6px solid ${softBlue};
    border-top-color: ${skyBlue};
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



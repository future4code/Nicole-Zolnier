import styled, { keyframes } from 'styled-components'

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`

export const Icon = styled.img`
  width: 20%;
  cursor: pointer;
  &:hover {
    animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
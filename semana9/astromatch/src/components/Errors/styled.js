import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    margin: 1em;
`
export const OhNo = styled.h3`
    text-align: center;
    color: #191919;
`

export const Dots = styled.div`
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`


export const Dot = styled.div`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fe029d;
  animation: ${fade} 0.8s ease-in-out alternate infinite;
  &:nth-of-type(1) {
  animation-delay: -0.4s;
}
`
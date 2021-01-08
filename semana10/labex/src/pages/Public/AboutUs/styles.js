import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const AboutImg = styled.img`
  width: 50%;
  margin-right: 6em;
  padding: 3em;
  
`

export const Tony = styled.img`
  width: 25%;
  align-self: flex-end;
  margin-right: 3em;
  margin-bottom: 6em;
`
export const MainContainer = styled.div`
  background-color: black;
  color: white;
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7.5em;
`
export const AboutText = styled.p`
  padding: 1.5em;
  text-align: end;
  font-size: 1.3rem;
  margin-right: 2em;
`

export const MemoriamContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

export const Quote = styled.p`
  padding: 3em;
  text-align: start;
  font-size: 1.5rem;
  margin-left: 2em;
  margin-right: 12em;
  padding-bottom: 0;
  cursor: default;
`
export const Credits = styled.p`
  text-align: end;
  padding: 3em;
  font-size: 1.3rem;
  margin-right: 10em;
  padding-top: 0;
  margin-bottom: 3em;
  cursor: default;
`
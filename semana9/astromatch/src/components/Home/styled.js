import styled, { keyframes } from 'styled-components'

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    animation: ${(props) => props.animate ? (props.animation) : null} 0.5s forwards;
`

export const right = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(-100px) rotate(-10deg);
  }
`;

export const left = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(100px) rotate(10deg);
  }
`;
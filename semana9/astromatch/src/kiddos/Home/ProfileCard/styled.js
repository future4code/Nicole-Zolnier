import styled, { keyframes, css } from 'styled-components'
import { Box } from "@material-ui/core";

const right = keyframes`
    from {
	    transform: translate(0) rotate(0);
        opacity: 1;
    }

    to {
	    transform: translate(-200px) rotate(-20deg);
        opacity: 0;
    }
`;

const left = keyframes`
    from {
        opacity: 1;
	    transform: translate(0) rotate(0);
    }

    to {
        opacity: 0;
	    transform: translate(200px) rotate(20deg);
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    transition: 0.5s;
    animation: ${(props) => {
        if (props.swipeLeft) {
            return css`${left} 1.5s`
        } else if (props.swipeRight) {
            return css`${right} 1.5s`
        }
    }};
`
export const BlurredBackground = styled(Box)`
    background-image: url(${(props) => props.bgimage});
	filter: blur(10px);
    margin: 0;
	height: 100%;
	width: 100%;
    background-clip: border-box;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
`

export const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`


export const StyledBox = styled(Box)`
    height: 410px;
    width: 300px;
    display: flex;
	align-items: center;
	position: relative;
    overflow: hidden;
`

export const InfoBox = styled(Box)`
	position: absolute;
    bottom: 0;
	width: 90%;
	color: white;
	display: flex;
	flex-direction: column;
	z-index: 2;
    cursor: default;
`

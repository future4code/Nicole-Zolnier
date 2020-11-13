import React from "react";
import styled, { keyframes } from 'styled-components'
import { Typography, Box } from "@material-ui/core";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  transition: 0.5s;
  animation: ${(props) => props.animate? (props.animation === "right" ? right : left) : null } 0.5s forwards;
`
const BlurredBackground = styled(Box)`
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

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`

const right = keyframes`
  from {
	  transform: translate(0) rotate(0);
  }

  to {
	  transform: translate(-100px) rotate(-10deg);
  }
`;

const left = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(100px) rotate(10deg);
  }
`;

const StyledBox = styled(Box)`
  height: 420px;
  width: 300px;
  display: flex;
	align-items: center;
	position: relative;
  overflow: hidden;
`

const InfoBox = styled(Box)`
	position: absolute;
  bottom: 0;
	width: 90%;
	color: white;
	display: flex;
	flex-direction: column;
	z-index: 2;
  cursor: default;
`

function ProfileCard(props) {
  return (
    <Div animate={props.animate} animation={props.animation}>
      <StyledBox boxShadow={8} borderRadius={8}>
      <BlurredBackground bgimage={props.profile.photo}/>
        <ProfilePicture src={props.profile.photo}/>
        <InfoBox p="1em" bgcolor='rgba(0, 0, 0, 0.7)'>
          <Typography variant='h5'>
            <strong>{props.profile.name}, {props.profile.age}</strong>
          </Typography>
          <Typography>
            {props.profile.bio}
          </Typography>
        </InfoBox>
      </StyledBox>
        
    </Div>
  );
}
export default ProfileCard



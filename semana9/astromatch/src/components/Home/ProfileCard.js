import React from "react";
import styled, { keyframes } from 'styled-components'
import { Typography, Box } from "@material-ui/core";

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1em;
position: relative;
overflow: hidden;
transition: 0.5s;
animation: ${(props) => props.animate? (props.animation === "right" ? right : left) : null } 0.5s forwards;
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
  background-image: url(${(props) => props.bgimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 400px;
  width: 300px;
`
function ProfileCard(props) {
  return (
    <Div animate={props.animate} animation={props.animation}>
      <StyledBox
        display='flex'
        boxShadow={5}
        borderRadius={8}
        bgimage={props.profile.photo}
        overflow='hidden'
      >
        <Box
          color='white'
          bgcolor='rgba(0, 0, 0, 0.4)'
          alignSelf="flex-end"
          flexGrow={1}
          px="1em"
          py="1em"
        >
          <Typography variant='h5'>
            <strong>{props.profile.name}, {props.profile.age}</strong>
          </Typography>
          <Typography>
            {props.profile.bio}
          </Typography>
        </Box>
      </StyledBox>
    </Div>
  );
}
export default ProfileCard



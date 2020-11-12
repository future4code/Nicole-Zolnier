import React from "react";
import styled from 'styled-components'
import { Typography, Box } from "@material-ui/core";


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`
const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgimage});
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  background-size: 100% 100%;
  height: 400px;
  width: 300px;
`
function ProfileCard(props) {
  return (
    <Div>
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



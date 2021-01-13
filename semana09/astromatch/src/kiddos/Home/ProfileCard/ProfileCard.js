import React from "react";
import { Typography } from "@material-ui/core";
import {Container, StyledBox, BlurredBackground, ProfilePicture, InfoBox} from './styled'

function ProfileCard(props) {
  return (
    <Container swipeLeft={props.swipeLeft} swipeRight={props.swipeRight}>
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
        
    </Container>
  );
}
export default ProfileCard



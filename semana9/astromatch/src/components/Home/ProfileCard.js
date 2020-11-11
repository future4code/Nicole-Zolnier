import React from 'react'
import styled from 'styled-components'

const ProfilePic = styled.img`
  width: 50%;
`

function ProfileCard(props) {
    return (
      <div>
        <ProfilePic src={props.profile.photo}/>
        <h1>{props.profile.name}, {props.profile.age}</h1>
        <p>{props.profile.bio}</p>
      </div>
    );
  }
  
export default ProfileCard;
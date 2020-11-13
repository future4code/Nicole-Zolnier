import React from 'react'
import {Avatar, Typography} from '@material-ui/core';
import {PersonContainer, StyledBadge, useStyles} from './styled'

function MatchCard(props) {
  const classes = useStyles();
    return (
      <PersonContainer >
        <div className={classes.root}>
        <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        variant="dot"
      >
        <Avatar className={classes.large} alt="foto de perfil" src={props.photo} />
      </StyledBadge>
        </div>
        <Typography variant="h6" >{props.name}</Typography>
      </PersonContainer>
    );
  }
  
export default MatchCard;
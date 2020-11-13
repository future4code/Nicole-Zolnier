import React from 'react'
import styled from 'styled-components'
import {Badge, Avatar, Typography} from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {paleGrey} from '../../constants/colors'

const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${paleGrey};
  }
`
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  }
}));

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
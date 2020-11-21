import React from 'react'
import { Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const useStyles = makeStyles({
  aprove: {
      color: "white",
      background: 'linear-gradient(45deg,#62bc82 100%, #FF8E53 90%)',
  },
  donot: {
    color: "white",
    background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
  }
});

function Buttons(props) {
  const classes = useStyles()
  
  return (
    <ButtonContainer>
        <Button className={classes.aprove} onClick={() => props.decideCandidate(true)}>aprovar</Button>
        <Button className={classes.donot} onClick={() => props.decideCandidate(false)}>não aprovar</Button>
    </ButtonContainer>
  );
}

export default Buttons;
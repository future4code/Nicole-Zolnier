import React from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import {useStyles, ButtonContainer} from '../styles'

function Buttons(props) {
  const classes = useStyles()
  
  return (
    <ButtonContainer>
        <Button className={classes.aprove} onClick={() => props.decideCandidate(true)}>APPROVE</Button>
        <Button className={classes.donot} onClick={() => props.decideCandidate(false)}>DON'T APPROVE</Button>
    </ButtonContainer>
  );
}

export default Buttons;
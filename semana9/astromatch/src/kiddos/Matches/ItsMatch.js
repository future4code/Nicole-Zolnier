import React from 'react'
import match from '../../assets/match.svg'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const IconTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0.5em;
  cursor: default;
`
const MatchIcon = styled.img`
  width: 10%;
  padding-right: 0.2em;
`

function ItsMatch() {
  return (
    <IconTextContainer>
      <MatchIcon src={match} />
      <Typography variant="h6"><strong>It's a match!</strong></Typography>
    </IconTextContainer>

  )


}

export default ItsMatch;
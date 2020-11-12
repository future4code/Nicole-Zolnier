import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    margin: 1em;
`

const YouUgly = styled.h3`
    text-align: center;
    color: black;
`

function Message() {
  return (
    <Div>
       <YouUgly>Eita! Até agora nenhuma match, que tal passar um desodorante?</YouUgly>
    </Div>

  )


}
  
export default Message;
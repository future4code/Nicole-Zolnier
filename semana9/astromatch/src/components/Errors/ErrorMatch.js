import React from 'react'
import {ErrorContainer, Dots, Dot, OhNo} from './styled'

function Error() {
  return (
    <ErrorContainer>
        <Dots>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </Dots>
       <OhNo>Eita! Nenhum match, que tal passar um desodorante?</OhNo>
    </ErrorContainer>

  )


}
  
export default Error;
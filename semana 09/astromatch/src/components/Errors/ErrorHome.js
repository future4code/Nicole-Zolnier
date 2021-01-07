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
            <OhNo>Ops! Você já viu todos os perfis!</OhNo>            
        </ErrorContainer>
    )

}

export default Error;
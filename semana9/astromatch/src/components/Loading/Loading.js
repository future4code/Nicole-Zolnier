import React from 'react'
import {Animation, AnimationContainer} from './styled'
import Tooltip from '@material-ui/core/Tooltip'


function Loading(props) {
    return (
        <Tooltip title="Tá carregando!" arrow>
            <AnimationContainer>
            <Animation></Animation>
        </AnimationContainer>
        </Tooltip>
        

    )


}

export default Loading;
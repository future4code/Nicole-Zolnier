import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    padding: 0.4em;
    align-items: center;
`
export const Arrow = styled.img`
    width: 50%;
    margin: 0.2em;
    cursor: pointer;
`

export const StyledBox = styled(Box)`
    display: flex;
    width: 90vw;
    max-width: 600px;
    background-color: white;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
    width: 90%;
    cursor: pointer;
`

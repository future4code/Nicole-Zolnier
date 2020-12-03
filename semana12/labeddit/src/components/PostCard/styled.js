import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    padding: 0.4em;
    align-items: center;
    background-color: #F8F9FA;
    border-radius: 7px;
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
    border: 1px solid #D7D7D7;
    &:hover {
        border: 1px solid #A7A9AB;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
    width: 90%;
    cursor: pointer;
`

import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #DAE0E6;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1em;
`
export const StyledBox = styled(Box)`
    display: flex;
    width: 90vw;
    max-width: 600px;
    background-color: white;
    flex-direction: column;
`

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
`
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

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
    width: 90%;
    cursor: default;
`
export const InfoContainer = styled.div`
    display: flex;
`
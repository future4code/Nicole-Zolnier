import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const SignUpContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
    background-color: white;
    border: 1px solid #D7D7D7;
    &:hover {
        border: 1px solid #A7A9AB;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 45vh;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const Logo = styled.img`
    width: 20%;
    align-self: center;

`

export const Message = styled.div`
    display: flex;
    justify-content: center;
`

export const Anchor = styled.h1`
    padding-left: 0.5em;
    color: blue;
    cursor: pointer;
`

export const MainContainer = styled.div`
    height: 92vh;
    background-color: #DAE0E6;
    padding-top: 2em;
`
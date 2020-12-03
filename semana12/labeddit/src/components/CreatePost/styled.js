import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
`

export const StyledBox = styled(Box)`
    display: flex;
    width: 35vw;
    min-width: 500px;
    background-color: white;
    margin: 1em;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 28vh;
    justify-content: space-around;
    margin-bottom: 15px;
`
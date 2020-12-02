import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
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

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
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
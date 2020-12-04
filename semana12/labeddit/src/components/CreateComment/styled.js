import styled from 'styled-components'

export const CreateContainer = styled.div`
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
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
    align-items: center;
`
export const Avatar = styled.img`
    width: 8%;
    border-radius: 5px;
    border: 1px solid #A7A9AB;
`

export const UserThings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.1em;
    padding-bottom: 0.2em;
`
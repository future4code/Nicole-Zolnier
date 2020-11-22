import React from 'react'
import astronaut from '../assets/astronaut.svg'
import styled from 'styled-components'
import { Button, createMuiTheme, MuiThemeProvider, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    color: white;
    margin: 0;
`
const myTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      },
      secondary: {
        main: "#67C7EB"
      }
    },
})

const Title = styled(Typography)`
  margin: 1em;
  padding-bottom: 1em;
`

const Img = styled.img`
    width: 60%;
    margin-bottom: 6em;
`

const TextButtonContainer = styled.div`
    padding: 1em;
    margin-left: 2em;
`

function Slogan() {
    const history = useHistory()

    const goToApply = () => {
      history.push("/inscricao")
    }

    return (
        <Container>
            <TextButtonContainer>
                <Title variant="h4">Welcome to starkX! Your next adventure is just one planet away!</Title>
                <MuiThemeProvider theme={myTheme}>
                <Button color="secondary" variant="contained" onClick={goToApply}>Apply now</Button>
                </MuiThemeProvider>
                
            </TextButtonContainer>

            <Img src={astronaut} />
        </Container>
    );
}

export default Slogan;

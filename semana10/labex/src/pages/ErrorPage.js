import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`
const Title = styled(Typography)`
  padding-bottom: 0.5em;
  color: white;
`

const Text = styled(Typography)`
  color: white;
  padding: 0.2em;
`

function ErrorPage() {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <Title variant="h3">There's nothing here!</Title>
        <Text align="center" variant="body1">Whatever you were looking for doesn't currently exist at this address. <br></br>  Unless you were looking for this error page, in which case: <br></br> Congrats! You totally found it!</Text>
      </MainContainer>

      <Footer />
    </div>
  );
}

export default ErrorPage;
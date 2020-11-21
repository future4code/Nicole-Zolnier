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
        <Title variant="h3">Ops, não tem nada aqui!</Title>
        <Text align="center" variant="body1">O que você estava procurando não existe nesse endereço. <br></br> A não ser que você estava procurando por essa página de erro, nesse caso: <br></br> Parabéns! Você a encontrou!</Text>
      </MainContainer>

      <Footer />
    </div>
  );
}

export default ErrorPage;
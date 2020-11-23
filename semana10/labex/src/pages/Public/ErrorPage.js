import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer/Footer'
import {Title, MainContainer, Text} from '../styles'

// tenho mto carinho por essa pagina aqui
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
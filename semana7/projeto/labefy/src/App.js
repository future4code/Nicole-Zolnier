import React from 'react'
import PlayList from './components/PlayList'
import Header from './components/Header'
import styled from 'styled-components'
import Footer from './components/Footer'

// ------- css
const TheDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

class App extends React.Component {

  render() {
    return (
      <TheDiv>
        <Header />
        <PlayList />
        <Footer />
      </TheDiv>
    );
  }
}

export default App;
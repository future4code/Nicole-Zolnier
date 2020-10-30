import './App.css';
import React from 'react'
import PlayList from './components/PlayList'
import Header from './components/Header'
import styled from 'styled-components'

const TheDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`

class App extends React.Component {
  

  render() {
    return (
      <TheDiv>
        <Header />
        <PlayList />
        
      </TheDiv>
    );
  }
}

export default App;
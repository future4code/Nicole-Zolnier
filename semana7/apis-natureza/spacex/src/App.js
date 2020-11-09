import React from 'react';
import RenderPage from './components/spacex/RenderPage'
import styled from 'styled-components'

const TheDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
class App extends React.Component {

  
  render() {
    return (
      <TheDiv>
        <RenderPage />
      </TheDiv>
    );
  }
}

export default App;

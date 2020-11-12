import './App.css';
import Home from './components/Home/Home';
import Match from './components/Matches/Match';
import NavBar from './components/NavBar';
import { useState } from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'


const Background = styled.div`
  background-color: #fdc9cb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`


function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const goToHome = () => {
    setCurrentPage("home")
  }

  const goToMatches = () => {
    setCurrentPage("matches")
  }

  let renderedPage
  switch (currentPage) {
    case "home":
      renderedPage = <Home currentPage={currentPage} goToHome={goToHome} goToMatches={goToMatches} />
      break;
    case "matches":
      renderedPage = <Match currentPage={currentPage} goToHome={goToHome} goToMatches={goToMatches} />
      break;
  }

  return (
    <Background>
      <Box
        height={600}
        width={350}
        borderRadius={8}
        bgcolor="white"
        boxShadow={10}
        overflow="hidden"
      >
        {renderedPage}
      </Box>

    </Background>

  );
}

export default App;

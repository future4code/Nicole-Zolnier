import Home from './Home/Home';
import Match from './Match/Match';
import { useState } from 'react'
import Box from '@material-ui/core/Box'

function RenderScreen() {
  // state pra saber a pagina
  const [currentPage, setCurrentPage] = useState("home")

  // setar o current como home
  const goToHome = () => {
    setCurrentPage("home")
  }

  // setar o current como matches
  const goToMatches = () => {
    setCurrentPage("matches")
  }

  // switch pra mudar de pagina, odefault sendo o home
  let renderedPage
  switch (currentPage) {
    case "home":
      renderedPage = <Home currentPage={currentPage} goToHome={goToHome} goToMatches={goToMatches} />
      break;
    case "matches":
      renderedPage = <Match currentPage={currentPage} goToHome={goToHome} goToMatches={goToMatches} />
      break;
    default:
        renderedPage = <Home currentPage={currentPage} goToHome={goToHome} goToMatches={goToMatches} />
  }

  return (
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
  );
}

export default RenderScreen;

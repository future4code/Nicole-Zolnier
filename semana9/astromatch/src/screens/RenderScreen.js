import Home from './Home/Home';
import Match from './Match/Match';
import { useState } from 'react'
import Box from '@material-ui/core/Box'

function RenderScreen() {

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

import './App.css';
import ClearAll from './components/ClearAll';
import Home from './components/Home/Home';
import Match from './components/Matches/Match';
import NavBar from './components/NavBar';
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const goToHome = () => {
    setCurrentPage("home")
  }

  const goToMatches = () => {
    setCurrentPage("matches")
  }

 
    let renderedPage
    switch(currentPage) {
      case "home":
        renderedPage = <Home />
        break;
      case "matches":
        renderedPage = <Match />
        break;
    }
    
  
  return (
    <div className="App">
      <ClearAll />
      <NavBar currentPage={currentPage} goToHome={goToHome} goToMatches={goToMatches}/>
      {renderedPage}
    </div>
  );
}

export default App;

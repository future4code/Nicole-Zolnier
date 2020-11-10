import './App.css';
import ClearAll from './components/ClearAll';
import Home from './components/Home/Home';
import Match from './components/Matches/Match';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <ClearAll />
      <Match />
      <p>App</p>
      <Home />
      
    </div>
  );
}

export default App;

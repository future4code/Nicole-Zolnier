import './App.css';
import { useState, useEffect } from 'react'
import axios from "axios";
import PokeCard from './components/PokeCard';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151"

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    
    axios.get(baseUrl).then(response => {
      setPokeList(response.data.results);
    }).catch(err => {
      console.log(err);
    })

  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };


  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}

    </div>
  );
}

export default App;

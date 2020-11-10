import axios from "axios";
import { useState, useEffect } from 'react'

function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    const pegaPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(response => {
            setPokemon(response.data )
        }).catch(err => {
            console.log(err)
        })
    }

    // didmount
    useEffect(() => {
        pegaPokemon(props.pokemon)
    })

    // didupdate
    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    return (
        <div>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;
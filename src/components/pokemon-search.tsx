import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-services';

const PokemonSearch: FunctionComponent = () => {
  const [term, setTerm] = useState<string>('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);
  }

  useEffect(() => {
    PokemonService.searchPokemon(term).then(pokemons => setPokemons(pokemons));
  }, [term]);

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input type="text" placeholder="Rechercher un pokémon" value={term} onChange={handleInputChange} />
            </div>
            <div className='collection'>
              {pokemons.map((pokemon) => (
                <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`} className="collection-item">
                  {pokemon.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;

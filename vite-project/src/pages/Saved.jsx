// src/pages/Saved.jsx
import React from 'react';
// import SavedPokemon from '../components/SavedPokemon';

const Saved = ({ savedPokemon, onRemovePokemon, onAddAlias }) => {
    const handleAliasChange = (pokemon, alias) => {
        onAddAlias(pokemon, alias);
      };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Saved Pokemon</h2>
      <ul className="space-y-2">
        {savedPokemon.map((pokemon, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <span>{pokemon.name} {pokemon.alias ? `(${pokemon.alias})` : ''}</span>
              <input
                type="text"
                placeholder="Add alias"
                value={pokemon.alias || ''}
                onChange={(e) => handleAliasChange(pokemon, e.target.value)}
                className="ml-2 border px-2 py-1"
              />
            </div>
            <button 
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => onRemovePokemon(pokemon)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Saved;

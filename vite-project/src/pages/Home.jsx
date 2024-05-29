// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ onSavePokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonList(result.data.results);
      } catch (error) {
        console.error('Error fetching the Pokemon data', error);
      }
    };
    fetchData();
  }, []);

  const handleSaveClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Pokemon List</h2>
        <ul className="space-y-2">
          {pokemonList.map((pokemon, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{pokemon.name}</span>
              <button 
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => handleSaveClick(pokemon)}
              >
                Save
              </button>
            </li>
          ))}
        </ul>
        <SavePokemonModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSave={onSavePokemon}
          pokemon={selectedPokemon}
        />
      </div>
    </div>
  );
};

export default Home;

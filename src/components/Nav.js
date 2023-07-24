import React from 'react';
import { Link } from 'react-router-dom';
import pokemon from '../assets/pokemon.png';

export default function Nav() {
  return (
    <nav>
      <img src={pokemon} alt="pokemon-icon" />
      <Link to="/"><h1>Where's the Pokemon?</h1></Link>

    </nav>
  );
}

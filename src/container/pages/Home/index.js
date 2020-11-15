import React, { Component } from 'react';
import './styles.scss';

import MyPokemonDetails from './thisComponents/MyPokemonDetails';
import PokemonDetails from './thisComponents/PokemonDetails';
import PokemonList from './thisComponents/PokemonList';

class Home extends Component {
  render() {
    return (
      <div>
        <MyPokemonDetails />
        <PokemonDetails />
        <PokemonList />
      </div>
    )
  };
}

export default Home;
import React, { Component } from 'react';
import axios from "axios";
import PokemonListRoute from './componentsRender/PokemonListRoute';
class PokemonList extends Component {
  state = {
    isLoading: false,
    getPokemon: []
  };

  componentDidMount() {
    this.handleGetData();
  };

  async handleGetData() {
    const res = await axios.get('/pokemon');
    this.setState({ getPokemon: res.data.results});
  };

  render() {
    const {
      state: { getPokemon }
    } = this;
    return (
      <div className='content-pokemon-list'>
        <h2>Pokemon List</h2>
        <ul>
          {getPokemon.map((val, idx) => {
            return (
              <li key={`pkmn-${idx}`}>
                <PokemonListRoute name={val.name} url={val.url} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  };
}

export default PokemonList;
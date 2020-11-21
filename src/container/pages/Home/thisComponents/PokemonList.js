/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PokemonListRoute from './componentsRender/PokemonListRoute';
class PokemonList extends Component {
  state = {
    isLoading: false,
    getPokemon: [],
  };

  componentDidMount() {
    this.handleGetData();
  }

  async handleGetData() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    this.setState({ getPokemon: res.data.results });
  }

  render() {
    const {
      state: { getPokemon },
    } = this;
    return (
      <div className="content-pokemon-list">
        <h2>Pokemon List</h2>
        <h2>Owned total: {this.props.totalPokemon}</h2>
        <ul>
          {getPokemon.map((val, idx) => {
            return (
              <li key={idx} className="pokemon-list">
                <PokemonListRoute name={val.name} url={val.url} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPokemon: state.totalPokemon,
    pokemonData: [
      {
        pokemonId: state.totalPokemon,
        pokemonDetails: [
          {
            detailsId: state.detailsId,
            nickName: state.nickName,
          },
        ],
      },
    ],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPokemon: () => dispatch({ type: 'ADD_POKEMON' }),
    handleReleasePokemon: () => dispatch({ type: 'RELEASE_POKEMON' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

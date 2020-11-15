import React, { Component } from 'react';
import axios from "axios";
import { Button } from 'components';
class PokemonList extends Component {
  state = {
    isLoading: false,
    getPokemon: [],
  };

  componentDidMount() {
    this.handleGetData();
  };

  handleGetData = () => {
    axios.get('/pokemon')
    .then(res => {
      console.log(res.data.results);
      this.setState({ getPokemon: res.data.results});
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    const {
      state: { isLoading, getPokemon }
    } = this;
    console.log('get here:', getPokemon);
    return (
      <div className='content-pokemon-list'>
        <h2>Pokemon List</h2>
        <ul>
          {getPokemon.map((val, idx) => {
            return (
              <li key={`pkmn-${idx}`}>
                <Button route>{val.name}</Button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  };
}

export default PokemonList;
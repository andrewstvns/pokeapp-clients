import React, { Component } from 'react';
import './styles.scss';

import {
  HashRouter,
  Route
} from 'react-router-dom';

import MyPokemonDetails from './thisComponents/MyPokemonDetails';
import PokemonDetails from './thisComponents/PokemonDetails';
import PokemonList from './thisComponents/PokemonList';

class Home extends Component {
  render() {
    return (
      <div className='p-home'>
        <div className='container'>
          <div className='row'>
            <div className='home-content'>
              <HashRouter>
                <Route exact path='/' component={PokemonList} />
                <Route path='/details' component={PokemonDetails} />
                <Route path='/list' component={MyPokemonDetails} />
              </HashRouter>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Home;
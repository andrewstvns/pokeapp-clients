import React, { Component } from 'react';
import { Button } from 'components';
class PokemonListRoute extends Component {
  state = {
    name: '',
    pokemonIndex: ''
  };

  componentDidMount() {
    this.handleGetData();
  };

  async handleGetData() {
    const { name, url } = this.props;
    let getIndex = url.split('/')[url.split('/').length - 2];
    this.setState({
      name: name,
      pokemonIndex: getIndex
    });
  };

  render() {
    const {
      handleClickButton,
      state: { name, pokemonIndex }
    } = this;
    return <Button route pokemonIndex={pokemonIndex}>{name}</Button>
  };
}

export default PokemonListRoute;
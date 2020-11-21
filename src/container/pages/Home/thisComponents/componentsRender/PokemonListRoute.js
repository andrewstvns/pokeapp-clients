/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { CardDetailList } from 'components';
class PokemonListRoute extends Component {
  state = {
    name: '',
    image: '',
    pokemonIndex: '',
  };

  componentDidMount() {
    this.handleGetData();
  }

  async handleGetData() {
    const { name, url } = this.props;
    let getIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${getIndex}.png?raw=true`;
    this.setState({
      name: name,
      image: imageUrl,
      pokemonIndex: getIndex,
    });
  }

  render() {
    const {
      state: { name, image, pokemonIndex },
    } = this;
    return (
      <CardDetailList
        link
        pokemonIndex={pokemonIndex}
        image={image}
        name={name}
      />
    );
  }
}

export default PokemonListRoute;

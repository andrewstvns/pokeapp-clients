import React, { Component } from 'react';
import axios from 'axios';
import { Button, CardDetail } from 'components';
class PokemonDetails extends Component {
  state = {
    isLoading: false,
    getPokemon: [],
    getPokemonUrl: [],
    getPokemonDetail: [],
  };

  componentDidMount() {
    // this.handleGetData();
    this.handleData();
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

  handleData = () => {
    let getData = [];
    for (let i = 1 ; i < 20 ; i++) {
      axios.get(`/pokemon/${i}`)
        .then(res => {
          getData.push(res.data);
          this.setState({ getPokemonDetail: getData});
          console.log(this.state.getPokemonDetail);
        })
    };
  };

  render() {
    const {
      state: { getPokemon, getPokemonDetail }
    } = this;

    return (
      <div className='content-pokemon-details'>
        PokemonDetails
        <div className='card-wrapper'>
          <ul>
            {getPokemonDetail.map((val, idx) => {
              return (
                <li key={`pkmn-${idx}`}>
                  <CardDetail 
                    name={val.name}
                    image={val.sprites.front_default}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className='button-catch-wrapper'>
          <Button>Catch</Button>
        </div>
      </div>
    )
  };
}

export default PokemonDetails;
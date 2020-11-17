import React, { Component } from 'react';
import axios from 'axios';
import { CardDetailList, Popup } from 'components';

class MyPokemoDetails extends Component {
  state = {
    isLoading: false,
    showPopup: false,
    totalPokemon: 0,
    getPokemon: []
  };

  componentDidMount() {
    this.handleGetData();
  };

  async handleGetData() {
    const res = await axios.get('/pokemon');
    this.handleAllPokemon(res.data.results);
  };

  async handleAllPokemon(url) {
    let pokemonData = await Promise.all(url.map(async val => {
      let pokemonRecord = await axios.get(val.url);
      return pokemonRecord.data;
    }));

    this.setState({ getPokemon: pokemonData });
    console.log(this.state.getPokemon);
  };

  handleShowPopup = (target, status) => {
    this.setState({
      [target] : !status
    });
  };

  handleClosePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  render() {
    const {
      handleShowPopup,
      handleClosePopup,
      state: { totalPokemon, getPokemon, showPopup }
    } = this;
    return (
      <div className='content-my-pokemon-list'>
        <h2>Owned total: {totalPokemon}</h2>
        <ul className='pokemon-list-wrapper'>
        {getPokemon.map((val, idx) => (
          <li className='pokemon-list' key={idx}>
            <CardDetailList data={val} onClick={() => handleShowPopup('showPopup', showPopup) } />
          </li>
        ))}
        </ul>
        <Popup 
          showPopup={showPopup} 
          handleClickClosePopup={() => handleClosePopup('showPopup', showPopup)}
        >
          <div className='pokemon-info'>
            {getPokemon.map(val => (
              <p>{val.name}</p>
            ))}
          </div>
        </Popup>
      </div>
    )
  };
}

export default MyPokemoDetails;
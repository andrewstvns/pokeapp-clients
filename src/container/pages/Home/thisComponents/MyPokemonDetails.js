/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, CardDetailList, Popup, Loading } from 'components';
import IconDelete from 'assets/images/delete-icon.png';

class MyPokemoDetails extends Component {
  state = {
    isLoading: false,
    showPopup: false,
    showPopupConfirmation: false,
    loadAnimation: false,
    getPokemon: [],
  };

  componentDidMount() {
    this.handleGetData();
  }

  async handleGetData() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    this.handleAllPokemon(res.data.results);
  }

  async handleAllPokemon(url) {
    let pokemonData = await Promise.all(
      url.map(async (val) => {
        let pokemonRecord = await axios.get(val.url);
        return pokemonRecord.data;
      })
    );

    this.setState({ getPokemon: pokemonData });
  }

  handleShowPopup = () => {
    this.setState({ loadAnimation: true });
    setTimeout(() => {
      this.setState({
        loadAnimation: false,
        showPopup: true,
      });
    }, 2000);
    document.body.classList.add('remove-scroll');
  };

  handleConfirmation = () => {
    this.setState({ loadAnimation: true });
    setTimeout(() => {
      this.setState({
        loadAnimation: false,
        showPopupConfirmation: true,
      });
    }, 2000);
    document.body.classList.add('remove-scroll');
  };

  handleClosePopup = () => {
    this.setState({
      showPopup: false,
    });
  };

  handleClosePopupConfirmation = () => {
    this.setState({ loadAnimation: true });
    setTimeout(() => {
      this.setState({
        loadAnimation: false,
        showPopupConfirmation: false,
      });
    }, 2000);
  };

  render() {
    const {
      handleShowPopup,
      handleClosePopup,
      handleConfirmation,
      handleClosePopupConfirmation,
      state: { getPokemon, showPopup, showPopupConfirmation, loadAnimation },
    } = this;
    return (
      <div className="content-my-pokemon-list">
        <h2>Owned total: {this.props.totalPokemon}</h2>
        <ul className="pokemon-list-wrapper">
          {getPokemon.map((val, idx) => (
            <li key={idx} className="pokemon-list">
              <CardDetailList key={idx} data={val} onClick={handleShowPopup} />
            </li>
          ))}
        </ul>
        <Popup showPopup={showPopup} handleClickClosePopup={handleClosePopup}>
          <div className="pokemon-info">
            <h2>Total Pokemon: {this.props.totalPokemon}</h2>
            <p>Nickname List : </p>
            {getPokemon.map((val, idx) => (
              <div className="my-pokemon-info-list" key={idx}>
                <p key={idx}>{val.name}</p>
                <button
                  onClick={handleConfirmation}
                  className="button-confirmation"
                  type="button"
                >
                  <img src={IconDelete} alt="Icon Delete" />
                </button>
              </div>
            ))}
          </div>
        </Popup>
        <Popup
          showPopup={showPopupConfirmation}
          handleClickClosePopup={handleClosePopupConfirmation}
          className="confirmation"
        >
          <div className="popup-confirmation">
            <Button onClick={handleClosePopupConfirmation} className="release">
              Release
            </Button>
            <Button onClick={handleClosePopupConfirmation}>Cancel</Button>
          </div>
        </Popup>
        <Loading show={loadAnimation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemoDetails);

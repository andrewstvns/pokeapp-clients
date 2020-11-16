import React, { Component } from 'react';
import axios from 'axios';
import { Button, CardDetail, Popup } from 'components';
import BackButton from 'assets/images/arrow-left.png';


const type_colors = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
}
class PokemonDetails extends Component {
  state = {
    isLoading: false,
    getPokemonDetail: [],
    name: '',
    types: [],
    moves: [],
    catchPokemon: 'Catch',
    imageUrl: '',
    inputNickName: '',
  };

  componentDidMount() {
    this.handleData();
  };

  async handleData () {
    const { pokemonIndex } = this.props.match.params;
    const res = await axios.get(`/pokemon/${pokemonIndex}`);
    let types = res.data.types.map(val => (
      val.type.name
    ));
    let moves = res.data.moves.map(val => (
      val.move.name
    ));
    this.setState({ 
      getPokemonDetail: res.data,
      name: res.data.name,
      imageUrl: res.data.sprites.front_default,
      types: types,
      moves: moves
    });
  };
 
  handleClickButton = () => {
    console.log('click');
    var d = Math.random();
    if (d < 0.5) {
        // 50% chance of being here
        this.setState({
          catchPokemon: 'Succes catch pokemon!'
        });
    } else {
      this.setState({
        catchPokemon: 'Failed catch pokemon!'
      });
    }
  };

  handleClickBack = () => {
    const {
      history: { goBack }
    } = this.props;
    goBack();
  };
  
  handleChangeFormText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      handleClickButton,
      handleClickBack,
      handleChangeFormText,
      state: { 
        name, 
        imageUrl, 
        types, 
        moves,
        catchPokemon,
        inputNickName
      }
    } = this;
    return (
      <div className='content-pokemon-details'>
        <div className='back-button-wrapper'>
          <button onClick={handleClickBack} className='back-button'>
            <img src={BackButton} alt='back-button' className='arrow-back' />
          </button>
        </div>
        <div className='card-wrapper'>
          <CardDetail name={name} image={imageUrl}>
            <div className='card-information'>
              <ul>
                {types.map(val => (
                  <li key={val}>
                    <p 
                      className='type-list'
                      style={{
                        backgroundColor: `#${type_colors[val]}`
                      }}
                    >
                        {val}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='card-moves-list'>
              <h2>Moves List</h2>
              <ul>
                {moves.map((val, idx) => (
                  <li key={val}>
                    <span className='moves-index'>{idx+1}</span>
                    <p className='moves-list'>{val}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CardDetail>
        </div>
        <div className='button-catch-wrapper'>
            <Button onClick={handleClickButton}>
              {catchPokemon}
            </Button>
            {/* <Popup 
              id='inputNickName'
              type='text'
              name='inputNickName'
              value={inputNickName}
              placeholder='Input Nickname'
              onChange={handleChangeFormText}
            /> */}
        </div>
      </div>
    )
  };
}

export default PokemonDetails;
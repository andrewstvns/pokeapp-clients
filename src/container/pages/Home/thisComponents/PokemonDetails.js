import React, { Component } from 'react';
import axios from 'axios';
import { Button, CardDetail, Popup } from 'components';
import TypeColors from 'helper';
import BackButton from 'assets/images/arrow-left.png';
class PokemonDetails extends Component {
  state = {
    isLoading: false,
    getPokemonDetail: [],
    name: '',
    types: [],
    moves: [],
    bgColor: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      specialAttack: '',
      specialDefense: '',
      speed: ''
    },
    catchPokemon: 'Catch',
    imageUrl: '',
    inputNickName: '',
    showPopup: false,
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
    let { 
      hp, 
      attack, 
      defense, 
      specialAttack, 
      specialDefense,
      speed
    } = '';
    res.data.stats.map(val => {
      let statName = val.stat.name;
      switch(statName) {
        case 'hp' :
          hp = val['base_stat']
          break;
        case 'attack' :
          attack = val['base_stat']
          break;
        case 'defense' :
          defense = val['base_stat']
          break;
        case 'special-attack' :
          specialAttack = val['base_stat']
          break;
        case 'special-defense' :
          specialDefense = val['base_stat']
          break;
        case 'speed' :
          speed = val['base_stat']
          break;
        default:
          break;
      };
      return res;
    });
    this.setState({ 
      getPokemonDetail: res.data,
      name: res.data.name,
      imageUrl: res.data.sprites.front_default,
      types: types,
      moves: moves,
      bgColor: res.data.types[0].type.name,
      stats: {
        hp: hp,
        attack: attack,
        defense: defense,
        specialAttack: specialAttack,
        specialDefense: specialDefense,
        speed: speed
      }
    });
  };
 
  handleClickButton = () => {
    let val = Math.random();
    if (val < 0.5) {
        this.setState({
          catchPokemon: 'Succes catch pokemon!',
          showPopup: true
        });
    } else {
      this.setState({
        catchPokemon: 'Failed catch pokemon!',
        showPopup: false
      });
    }
  };

  handleClosePopup = () => {
    this.setState({
      showPopup: false
    });
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
      handleClosePopup,
      handleChangeFormText,
      state: { 
        name, 
        imageUrl, 
        types, 
        moves,
        bgColor,
        stats: {
          hp,
          attack,
          defense,
          specialAttack,
          specialDefense,
          speed
        },
        catchPokemon,
        inputNickName,
        showPopup
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
          <CardDetail 
            name={name} 
            image={imageUrl}
            style={{
              backgroundColor: `#${TypeColors[bgColor]}`
            }}
          >
            <div className='card-information'>
              <ul className='card-type'>
                {types.map((val, idx) => (
                  <li key={idx}>
                    <p 
                      className='type-list'
                      style={{
                        backgroundColor: `#${TypeColors[val]}`
                      }}
                    >
                        {val}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className='card-stats'>
                <li className='card-stats-list'>
                  <p>Hp :</p>
                  <div className='card-stats-name'>
                    <div 
                      className='card-stats-bar'
                      style={{
                        width: `${hp}%`
                      }}
                    >
                      {hp}
                    </div>
                  </div>
                </li>
                <li className='card-stats-list'>
                  <p>Attack :</p>
                  <div className='card-stats-name'>
                    <div 
                      className='card-stats-bar'
                      style={{
                        width: `${attack}%`
                      }}
                    >
                      {attack}
                    </div>
                  </div>
                </li>
                <li className='card-stats-list'>
                  <p>Defense :</p>
                  <div className='card-stats-name'>
                    <div 
                      className='card-stats-bar'
                      style={{
                        width: `${defense}%`
                      }}
                    >
                      {defense}
                    </div>
                  </div>
                </li>
                <li className='card-stats-list'>
                  <p>Special Attack :</p>
                  <div className='card-stats-name'>
                    <div 
                      className='card-stats-bar'
                      style={{
                        width: `${specialAttack}%`
                      }}
                    >
                      {specialAttack}
                    </div>
                  </div>
                </li>
                <li className='card-stats-list'>
                  <p>Special Defense :</p>
                  <div className='card-stats-name'>
                    <div 
                      className='card-stats-bar'
                      style={{
                        width: `${specialDefense}%`
                      }}
                    >
                      {specialDefense}
                    </div>
                  </div>
                </li>
                <li className='card-stats-list'>
                  <p>Speed :</p>
                  <div className='card-stats-name'>
                    <div 
                      className='card-stats-bar'
                      style={{
                        width: `${speed}%`
                      }}
                    >
                      {speed}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='card-moves-list'>
              <div 
                className='card-moves-header'
                style={{
                  backgroundColor: `#${TypeColors[bgColor]}`
                }}
              >
                <h2>Moves List</h2>
              </div>
              <ul>
                {moves.map((val, idx) => (
                  <li key={idx}>
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
            <Popup 
              id='inputNickName'
              type='text'
              name='inputNickName'
              showPopup={showPopup}
              submit
              value={inputNickName}
              placeholder='Input Nickname'
              onChange={handleChangeFormText}
              handleClickClosePopup={handleClosePopup}
            />
        </div>
      </div>
    )
  };
}

export default PokemonDetails;
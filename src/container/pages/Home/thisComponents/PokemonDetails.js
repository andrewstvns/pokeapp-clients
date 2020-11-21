import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, CardDetail, Loading, Popup } from 'components';
import TypeColors from 'helper';
import BackButton from 'assets/images/arrow-left.png';

// skeleton
import Fade from 'react-reveal/Fade'
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import Skeleton from './skeletonComponents';

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
    showPopupFailed: false,
    loadAnimation: false
  };

  componentDidMount() {
    document.body.classList.add('load-skeleton');
    setTimeout(() => {
      this.setState({ isLoading: true });
      document.body.classList.remove('load-skeleton');
    }, 2000);
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
      this.setState({ loadAnimation: true });
      
      setTimeout(() => {
        this.setState({
          loadAnimation: false,
          catchPokemon: 'Succes catch pokemon!',
          showPopup: true
        });
      }, 2000);
    } else {
      this.setState({ loadAnimation: true });

      setTimeout(() => {
        this.setState({
          loadAnimation: false, 
          catchPokemon: 'Failed catch pokemon!',
          showPopupFailed: true
        });
      }, 2000);
    }
  };

  handleSubmit = () => {
    this.setState({ loadAnimation: true });

    setTimeout(() => {
      this.setState({
        loadAnimation: false, 
        showPopup: false
      });
    }, 2000);
  };

  handleClosePopup = () => {
    this.setState({
      showPopup: false,
      showPopupFailed: false
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
    const placeholder = (
      <div className='m-card-detail'>
        <Skeleton />
      </div>
    );

    const {
      handleClickButton,
      handleClickBack,
      handleSubmit,
      handleClosePopup,
      handleChangeFormText,
      state: { 
        isLoading,
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
        showPopup,
        showPopupFailed,
        loadAnimation
      }
    } = this;
    return (
      <ReactPlaceholder
        showLoadingAnimation
        customPlaceholder={placeholder}
        ready={isLoading}
      >   
        <div className='content-pokemon-details'>
          <div className='back-button-wrapper'>
            <button onClick={handleClickBack} className='back-button'>
              <img src={BackButton} alt='back-button' className='arrow-back' />
            </button>
          </div>
          <div className='card-wrapper'>
            <Fade>              
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
            </Fade>
          </div>
          <div className='button-catch-wrapper'>
              <Button onClick={handleClickButton}>Catch</Button>
              <Popup 
                id='inputNickName'
                type='text'
                name='inputNickName'
                title='Success Catch Pokemon!'
                showPopup={showPopup}
                submit
                value={inputNickName}
                placeholder='Input Nickname'
                onChange={handleChangeFormText}
                onClick={handleSubmit}
                handleClickClosePopup={handleClosePopup}
              />
              <Popup showPopup={showPopupFailed} handleClickClosePopup={handleClosePopup}>
                <h2>Failed catch Pokemon!</h2>
              </Popup>
          </div>
        </div>
        <Loading show={loadAnimation}/>
      </ReactPlaceholder>
    )
  };
};

const mapStateToProps = state => {
  return {
    totalPokemon: state.totalPokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCatchPokemon: () => dispatch({ type: 'ADD_POKEMON '}) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
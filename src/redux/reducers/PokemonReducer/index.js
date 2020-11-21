import { ADD_POKEMON, RELEASE_POKEMON } from 'redux/action/types';

const initState = {
  pokemonData: [],
  totalPokemon: 1
};  

const PokemonReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_POKEMON:
      return {...state, pokemonData:[...state.pokemonData]};
    case RELEASE_POKEMON:
      const filterData = state.pokemonData.filter(pokemonData => pokemonData.pokemonId !== action.payload);
      return {
        ...state,
        pokemonData: filterData
      };
    default:
      return {...state};
  };
};

export default PokemonReducer;
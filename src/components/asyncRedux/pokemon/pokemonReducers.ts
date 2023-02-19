import { PokemonDispatchTypes, pokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "./pokemonActionTypes";

interface DefaultStateI{
    loading:boolean,
    pokemon?:pokemonType
}
const defaultState:DefaultStateI={
    loading:false
}
const pokemonReducer=(state:DefaultStateI=defaultState,action:PokemonDispatchTypes):DefaultStateI=>{
    switch(action.type){
        case POKEMON_FAIL:
            return {
                loading:false
            }
            case POKEMON_LOADING:
            return {
                loading:true
            }
            case POKEMON_SUCCESS:
            return {
                loading:false,
                pokemon:action.payload
            }
    }
}
export default pokemonReducer;
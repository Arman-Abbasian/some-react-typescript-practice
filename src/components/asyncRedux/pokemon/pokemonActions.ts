import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "./pokemonActionTypes";

// here you say that in each action what kind of actoion type happen
export const GetPokemon=(pokemon:string)=>async (dispatch:Dispatch<PokemonDispatchTypes>)=>{
    try {
        dispatch({type:POKEMON_LOADING});
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        dispatch({type:POKEMON_SUCCESS,payload:res.data});
    } catch (error) {
        dispatch({type:POKEMON_FAIL});
    }
}

//define the types
export const POKEMON_LOADING="POKEMON_LOADING";
export const POKEMON_FAIL="POKEMON_FAIL";
export const POKEMON_SUCCESS="POKEMON_SUCCESS";

export type pokemonType={
    abilities:pokemonAbility[],
    sprites:pokemonSprites,
    stats:pokemonStat
}


//define the format of  data in DB
export type pokemonAbility={
    ability:{
        name:string,
        url:string
    }
}
export type pokemonSprites={
    front_default:string
}
export type pokemonStat={
   stat:{
    name:string
   }
}

//define that each event return which type of data
export interface PokemonLoading{
    type:typeof POKEMON_LOADING
}
export interface PokemonFail{
    type:typeof POKEMON_FAIL
}
export interface PokemonSuccess{
    type:typeof POKEMON_SUCCESS,
    payload:{
        abilities:pokemonAbility[],
        sprites:pokemonSprites,
        stats:pokemonStat
    }
}
//put all events in one variable
export type PokemonDispatchTypes=PokemonLoading|PokemonFail|PokemonSuccess
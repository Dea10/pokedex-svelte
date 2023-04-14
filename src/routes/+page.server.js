import { getPokemon } from "../getPokemon";

export async function load() {
    const data = await getPokemon();
    
    return {pokemonList: data};
}
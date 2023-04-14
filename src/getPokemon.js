export const getPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=0';

    const res = await fetch(url);
    const pokemonRes = await res.json();
    
    console.log('pokemonRes.results', pokemonRes.results)
    console.log('pokemonRes', pokemonRes)
    return pokemonRes.results;
    // return [{name: 'charmander'}]
}
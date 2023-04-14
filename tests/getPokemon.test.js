import { describe, it, expect, vi } from 'vitest';
import { getPokemon } from '../src/getPokemon';

global.fetch = vi.fn();

function createFetchResponse(data) {
    return { json: () => new Promise(resolve => resolve({data})) };
}

describe('Pokedex', () => {
    it('should return a pokemon', async () => {
        const pokemonListMock = [ { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' } ]

        fetch.mockResolvedValue(createFetchResponse(pokemonListMock));

        const pokemonList = await getPokemon();

        console.log('pokemonList', pokemonList)
        console.log('pokemonListMock', pokemonListMock)

        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0')
        expect(pokemonList).toStrictEqual(pokemonListMock)
    })
});
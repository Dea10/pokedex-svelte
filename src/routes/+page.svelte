<script>
    export let data;
    const { pokemonList } = data;
</script>

<h1>Pokedex</h1>

<div>
    <ul>
        {#each pokemonList as pokemon}
            <li>{pokemon.name}</li>
        {/each}
    </ul>
</div>

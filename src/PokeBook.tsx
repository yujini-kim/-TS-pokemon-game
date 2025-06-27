import usePokemonList from './hooks/usePokemonList'

/**
 * Displays a list of Pokémon with their images, Korean names, and types.
 *
 * Fetches Pokémon data using a custom hook and renders each Pokémon's image, Korean name, and a comma-separated list of its types.
 */
function PokeBook() {
  const { data } = usePokemonList()

  return (
    <div>
      <h1>포켓몬 이름과 타입</h1>
      <ul>
        {data?.map((poke, idx) => (
          <li key={idx}>
            <img src={poke.pokemonImg} alt={poke.koreaName} width={100} />
            {poke.koreaName} - 타입: {poke.koreaTypeName.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokeBook

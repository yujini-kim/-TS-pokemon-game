import type {
  PokemonBasicInfo,
  PokemonDetails,
  PokemonListApiResponse,
  TranslatedName,
  TypeSlot,
} from '../types/pokemon'

export async function transformPokemonDetails(
  fetchBasicData: PokemonListApiResponse,
): Promise<PokemonDetails[]> {
  const pokeDetails: PokemonDetails[] = await Promise.all(
    fetchBasicData.results.map(async (pokemon: PokemonBasicInfo) => {
      const fetchBasicDataDetails = await fetch(pokemon.url).then((res) => res.json())

      const speciesDetails = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${fetchBasicDataDetails.id}`,
      ).then((res) => res.json())
      const koreaName =
        speciesDetails.names.find((item: TranslatedName) => item.language.name === 'ko')?.name ||
        pokemon.name

      const pokemonID = speciesDetails.id

      const fetchBasicURL = await fetch(pokemon.url).then((res) => res.json())

      const koreaTypeName = await Promise.all(
        fetchBasicURL.types.map(async (type: TypeSlot) => {
          const typeRes = await fetch(type.type.url)
          const typeJson = await typeRes.json()
          const koreatype = await typeJson.names.find(
            (item: TranslatedName) => item.language.name === 'ko',
          )?.name
          return koreatype
        }),
      )

      const pokemonImg = fetchBasicURL.sprites.other['official-artwork'].front_default

      return { koreaName, pokemonID, koreaTypeName, pokemonImg }
    }),
  )
  return pokeDetails
}

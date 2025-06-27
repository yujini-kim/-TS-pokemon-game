import { useQuery } from '@tanstack/react-query'

interface PokemonBasicInfo {
  name: string
  url: string
}

interface TranslatedName {
  language: {
    name: string
    url: string
  }
  name: string
}

interface TypeSlot {
  slot: string
  type: {
    name: string
    url: string
  }
}

interface FetchResult {
  koreaName: string
  koreaTypeName: string[]
  pokemonImg: string
}

/**
 * Fetches and returns a list of Pokémon with their Korean names, Korean type names, and official artwork images.
 *
 * Uses React Query to asynchronously retrieve and cache data for 200 Pokémon, including their translated names and type information in Korean.
 *
 * @returns The query result containing an array of objects with Korean Pokémon names, Korean type names, and image URLs.
 */
export default function usePokemonList() {
  return useQuery<FetchResult[]>({
    queryKey: ['pokeList'],
    queryFn: async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
      const json = await res.json() // 포켓몬 이름, 디테일url 하나

      const pokeDetails = await Promise.all(
        json.results.map(async (pokemon: PokemonBasicInfo) => {
          const speciesRes = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`,
          ) //포켓몬 디테일 url
          const speciesDetails = await speciesRes.json() //detail url 속 데이터

          const koreaName = speciesDetails.names.find(
            (item: TranslatedName) => item.language.name === 'ko',
          ).name

          const res = await fetch(pokemon.url)
          const detail = await res.json()

          const koreaTypeName = await Promise.all(
            detail.types.map(async (type: TypeSlot) => {
              const typeRes = await fetch(type.type.url)
              const typeJson = await typeRes.json()
              const koreatype = await typeJson.names.find(
                (item: TranslatedName) => item.language.name === 'ko',
              ).name
              return koreatype
            }),
          )

          const pokemonImg = detail.sprites.other['official-artwork'].front_default

          return { koreaName, koreaTypeName, pokemonImg }
        }),
      )

      return pokeDetails
    },
  })
}

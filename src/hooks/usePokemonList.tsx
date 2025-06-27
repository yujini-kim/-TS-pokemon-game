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

export default function usePokemonList() {
  return useQuery<FetchResult[]>({
    queryKey: ['pokeList'],
    queryFn: async () => {
      const fetchJSON = async (url: string) => (await fetch(url)).json()

      const fetchBasicData = await fetchJSON('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')

      const pokeDetails = await Promise.all(
        fetchBasicData.results.map(async (pokemon: PokemonBasicInfo) => {
          const speciesDetails = await fetchJSON(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`,
          )
          const koreaName =
            speciesDetails.names.find((item: TranslatedName) => item.language.name === 'ko')
              ?.name || pokemon.name

          const fetchBasicURL = await fetchJSON(pokemon.url)

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

          return { koreaName, koreaTypeName, pokemonImg }
        }),
      )

      return pokeDetails
    },
  })
}

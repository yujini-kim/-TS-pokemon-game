import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

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

interface PageResult {
  data: FetchResult[]
  nextPage: number
  isLast: boolean
}

const PAGE_LIMIT = 20

export default function usePokemonList() {
  const fetchPokemon = async (offset: number) => {
    const fetchJSON = async (url: string) => (await fetch(url)).json()

    const fetchBasicData = await fetchJSON(
      `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${offset}`,
    ) //offset: 목록에서 몇번째 인덱스부터 가져올지 뜻함

    const pokeDetails = await Promise.all(
      fetchBasicData.results.map(async (pokemon: PokemonBasicInfo) => {
        const speciesDetails = await fetchJSON(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`,
        )
        const koreaName =
          speciesDetails.names.find((item: TranslatedName) => item.language.name === 'ko')?.name ||
          pokemon.name

        const pokemonID = speciesDetails.id

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

        return { koreaName, pokemonID, koreaTypeName, pokemonImg }
      }),
    )
    const nextOffset = fetchBasicData.next ? offset + PAGE_LIMIT : undefined
    const isLast = fetchBasicData.next === null

    return { data: pokeDetails, nextOffset, isLast }
  }

  const {
    data,
    fetchNextPage, // 다음페이지 불러오는 함수
    hasNextPage, //다음페이지가 있는지 여부
    isFetchingNextPage, //다음페이지 불러오는중인지
  } = useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam }) => fetchPokemon(pageParam), // pageParam을 offset으로 사용
    getNextPageParam: (lastPage) => lastPage.nextOffset, // 다음 페이지에 넘길 pageParam계산
    initialPageParam: 0, // 초기 offset 설정
  })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage }
}

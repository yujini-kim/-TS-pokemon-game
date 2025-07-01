import { useInfiniteQuery } from '@tanstack/react-query'
import { transformPokemonDetails } from '../utils/pokemon-data-transformer'

const PAGE_LIMIT = 20

export default function usePokemonList() {
  const fetchPokemonList = async (offset: number) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${offset}`,
    ).then((res) => res.json())

    const data = await transformPokemonDetails(res)
    const nextOffset = res.next ? offset + PAGE_LIMIT : undefined
    const isLast = res.next === null

    return { data, nextOffset, isLast }
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(pageParam),
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextOffset),
    initialPageParam: 0,
  })

  //모든페이지 데이터
  const allPokemon = data?.pages.flatMap((page) => page.data) ?? []

  return { allPokemon, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading }
}

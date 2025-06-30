import { useInfiniteQuery } from '@tanstack/react-query'
import type { fetchPokemonList } from '../types/pokemon'
import { transformPokemonDetails } from '../utils/pokemon-data-transformer.ts'

const PAGE_LIMIT = 20

export default function usePokemonList() {
  const fetchPokemonList = async (offset: number): Promise<fetchPokemonList> => {
    const fetchBasicData = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${offset}`,
    ).then((res) => res.json()) //offset: 목록에서 몇번째 인덱스부터 가져올지 뜻함

    const pokeDetails = await transformPokemonDetails(fetchBasicData)

    const nextOffset = fetchBasicData.next ? offset + PAGE_LIMIT : undefined
    const isLast = fetchBasicData.next === null

    return { data: pokeDetails, nextOffset, isLast }
  }

  const {
    data,
    fetchNextPage, // 다음페이지 불러오는 함수
    hasNextPage, //다음페이지가 있는지 여부
    isFetchingNextPage, //다음페이지 불러오는중인지
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam }) => fetchPokemonList(pageParam), // pageParam을 offset으로 사용
    getNextPageParam: (lastPage) => lastPage.nextOffset, // 다음 페이지에 넘길 pageParam계산
    initialPageParam: 0, // 초기 offset 설정
  })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading }
}

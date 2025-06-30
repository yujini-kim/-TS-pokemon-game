import usePokemonList from '../../hooks/usePokemonList'
const { data } = usePokemonList()

export function typeFilter(e: React.MouseEvent<HTMLButtonElement>) {
  const elementId = e.currentTarget.id
  const filterType = data?.pages.map((item) =>
    item.data.filter((pokemon) => pokemon.koreaTypeName?.includes(elementId)),
  )
  console.log('타입클릭시 필터링된 포켓몬', filterType)
  return filterType
}

export function searchName(searchTerm: string) {
  const filterName = data?.pages.map((page) =>
    page.data.filter((pokemon) => pokemon.koreaName.includes(searchTerm)),
  )
  return filterName
}

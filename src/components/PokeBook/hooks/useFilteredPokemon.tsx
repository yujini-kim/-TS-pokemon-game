import { useMemo } from 'react'
import type { fetchPokemonList, PokemonDetails } from '../../../types/pokemon'
import type { InfiniteData } from '@tanstack/react-query'

export default function useFilteredPokemon(
  data: InfiniteData<fetchPokemonList, unknown> | undefined,
  searchTerm: string,
  selectedType: string,
): PokemonDetails[][] {
  return useMemo(() => {
    if (!data) return []

    return data.pages.map((page) => {
      console.log(`페이지`, page)

      return page.data.filter((pokemon) => {
        const matchesName = searchTerm.trim() === '' || pokemon.koreaName?.includes(searchTerm)
        const matchesType = selectedType === '' || pokemon.koreaTypeName?.includes(selectedType)

        return matchesName && matchesType
      })
    })
  }, [data, searchTerm, selectedType])
}

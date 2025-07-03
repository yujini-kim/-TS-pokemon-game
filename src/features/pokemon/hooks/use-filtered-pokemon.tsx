import { useMemo } from 'react'
import type { PokemonDetails } from '../types/pokemon'

export default function useFilteredPokemon(
  data: PokemonDetails[],
  searchTerm: string,
  selectedType: string,
): PokemonDetails[] {
  return useMemo(() => {
    return data.filter((pokemon) => {
      const matchesName = searchTerm.trim() === '' || pokemon.koreaName?.includes(searchTerm)
      const matchesType = selectedType === '' || pokemon.koreaTypeName?.includes(selectedType)
      return matchesName && matchesType
    })
  }, [data, searchTerm, selectedType])
}

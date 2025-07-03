import type { PokemonDetails } from '../types/pokemon'

export function useSortPokemon() {
  return (data: PokemonDetails[], sortBy: string) => {
    switch (sortBy) {
      case '이름순':
        return data.sort((a, b) => a.koreaName.localeCompare(b.koreaName))
      case '도감번호순':
        return data.sort((a, b) => a.pokemonID - b.pokemonID)
      case 'HP 높은순':
        return data.sort((a, b) => b.HP - a.HP)
      case '공격력 높은순':
        return data.sort((a, b) => b.attack - a.attack)
      case '방어력 높은순':
        return data.sort((a, b) => b.defense - a.defense)
      case '특수공격력 높은순':
        return data.sort((a, b) => b.specialAttack - a.specialAttack)
      case '특수방어력 높은순':
        return data.sort((a, b) => b.specialDefense - a.specialDefense)
      case '스피드 높은순':
        return data.sort((a, b) => b.speed - a.speed)
      default:
        return data
    }
  }
}

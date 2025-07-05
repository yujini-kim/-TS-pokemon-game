import { create } from 'zustand'
import type { PokemonDetails } from '../types/pokemon-api-types'

interface PokemonListStore {
  pokemonList: PokemonDetails[]
  setPokemonList: (list: PokemonDetails[]) => void
}

export const usePokemonDetailStore = create<PokemonListStore>((set) => ({
  pokemonList: [],
  setPokemonList: (list) => set({ pokemonList: list }),
}))

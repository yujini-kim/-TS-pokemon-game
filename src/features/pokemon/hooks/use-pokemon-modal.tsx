import { useState } from 'react'
import type { PokemonDetails } from '../types/pokemon'

export default function usePokemonModal() {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (pokemon: PokemonDetails) => {
    setSelectedPokemon(pokemon || null)
    setIsModalOpen(true)
    console.log('선택된 포켓몬', pokemon)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPokemon(null)
  }

  return {
    selectedPokemon,
    isModalOpen,
    handleCardClick,
    handleCloseModal,
  }
}

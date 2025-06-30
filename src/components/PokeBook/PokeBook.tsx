import { useRef, useState } from 'react'
import usePokemonList from '../../hooks/usePokemonList'
import SearchBar from './ui/SearchBar'
import TypesBox from './ui/TypesBox'
import PokemonCard from './ui/PokemonCard'
import InfoModal from './ui/InfoModal'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import useFilteredPokemon from './hooks/useFilteredPokemon'
import usePokemonModal from './hooks/usePokemonModal'

function PokeBook() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemonList()
  const viewRef = useRef<HTMLDivElement>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const filteredData = useFilteredPokemon(data, searchTerm, selectedType)

  const { selectedPokemon, isModalOpen, handleCardClick, handleCloseModal } = usePokemonModal()

  useInfiniteScroll({
    viewRef,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  })

  return (
    <div>
      {isModalOpen && selectedPokemon && (
        <InfoModal
          ID={selectedPokemon.pokemonID}
          name={selectedPokemon.koreaName}
          img={selectedPokemon.pokemonImg}
          flavorText={selectedPokemon.flavorText}
          HP={selectedPokemon.HP}
          attack={selectedPokemon.attack}
          defense={selectedPokemon.defense}
          specialAttack={selectedPokemon.specialAttack}
          specialDefense={selectedPokemon.specialDefense}
          speed={selectedPokemon.speed}
          onClose={handleCloseModal}
        />
      )}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TypesBox selectedType={selectedType} setSelectedType={setSelectedType} />
      <PokemonCard filter={filteredData} onCardClick={handleCardClick} />

      <div ref={viewRef} className='flex justify-center items-center m-20'>
        로딩중...
      </div>
    </div>
  )
}

export default PokeBook

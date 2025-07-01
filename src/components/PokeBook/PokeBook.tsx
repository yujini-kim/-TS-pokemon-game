import { useRef, useState } from 'react'
import usePokemonList from '../../hooks/usePokemonList'
import SearchBar from './ui/SearchBar'
import TypesBox from './ui/TypesBox'
import PokemonCard from './ui/PokemonCard'
import InfoModal from './ui/InfoModal'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import useFilteredPokemon from './hooks/useFilteredPokemon'
import usePokemonModal from './hooks/usePokemonModal'
import SkeletonCardList from './ui/SkeletonCardList'
import LoadingAnimation from './ui/LoadingAnimation'

function PokeBook() {
  const { allPokemon, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = usePokemonList()

  const viewRef = useRef<HTMLDivElement>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const filteredData = useFilteredPokemon(allPokemon, searchTerm, selectedType)

  const { selectedPokemon, isModalOpen, handleCardClick, handleCloseModal } = usePokemonModal()

  useInfiniteScroll({
    viewRef,
    fetchNextPage,
    hasNextPage, //다음페이지 있는지
    isFetchingNextPage, //다음데이터 불러오고 있는지 boolean
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

      {isLoading || isFetchingNextPage ? (
        <SkeletonCardList />
      ) : (
        <PokemonCard filter={filteredData} onCardClick={handleCardClick} />
      )}

      <div ref={viewRef} className='flex justify-center items-center mt-20 mb-200'>
        {isFetchingNextPage && hasNextPage && <LoadingAnimation />}
        {!hasNextPage && !isLoading && !isFetchingNextPage && <p>마지막 포켓몬입니다!</p>}
        {/* 마지막 페이지 메시지 */}
      </div>
    </div>
  )
}

export default PokeBook

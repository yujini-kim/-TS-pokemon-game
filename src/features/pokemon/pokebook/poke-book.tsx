import { useEffect, useState } from 'react'
import usePokemonList from '../hooks/usePokemonList'
import SearchBar from '../components/SearchBar'
import TypesBox from '../components/TypesBox'
import PokemonCard from '../components/PokemonCard'
import InfoModal from '../components/InfoModal'

import LoadingAnimation from '../../../components/LoadingAnimation'
import { useInView } from 'react-intersection-observer'
import SortBar from '../components/SortBar'
import useFilteredPokemon from '../hooks/useFilteredPokemon'
import { useSortPokemon } from '../hooks/useSortPokemon'
import SkeletonCardList from '../components/SkeletonCardList'
import usePokemonModal from '../hooks/usePokemonModal'

function PokeBook() {
  const { allPokemon, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = usePokemonList()

  const { ref, inView } = useInView({
    threshold: 1,
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedSort, setSelectedSort] = useState('도감번호순')

  const filteredData = useFilteredPokemon(allPokemon, searchTerm, selectedType)
  const sortPokemon = useSortPokemon()
  const sortedData = sortPokemon(filteredData, selectedSort)

  const { selectedPokemon, isModalOpen, handleCardClick, handleCloseModal } = usePokemonModal()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      console.log('다음 페이지 불러오는 중', isFetchingNextPage)
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

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
      <SortBar selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      <PokemonCard filter={sortedData} onCardClick={handleCardClick} />

      <div ref={ref} className='flex justify-center items-center mt-20 mb-200'>
        {isFetchingNextPage && <LoadingAnimation />}
        {isLoading && <SkeletonCardList />}
        {!hasNextPage && !isLoading && !isFetchingNextPage && filteredData.length === 0 && (
          <p className='text-center text-gray-400 mt-4'>마지막 포켓몬입니다</p>
        )}
      </div>
    </div>
  )
}

export default PokeBook

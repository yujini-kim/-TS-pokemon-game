import { useEffect, useMemo, useRef, useState } from 'react'
import usePokemonList from '../hooks/usePokemonList'
import SearchBar from '../components/PokeBook/SearchBar'
import TypesBox from '../components/PokeBook/TypesBox'
import PokemonCard from '../components/PokeBook/PokemonCard'
import InfoModal from '../components/PokeBook/InfoModal'
import type { PokemonDetails } from '../types/pokemon'

function PokeBook() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemonList()
  const veiwRef = useRef<HTMLDivElement>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')

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

  const filteredData = useMemo(() => {
    if (!data) return []
    return data.pages.map((page) =>
      page.data.filter((pokemon) => {
        const matchesName = pokemon.koreaName.includes(searchTerm)
        const matchesType = selectedType ? pokemon.koreaTypeName?.includes(selectedType) : true
        return matchesName && matchesType
      }),
    )
  }, [data, searchTerm, selectedType])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          console.log('다음페이지 불러오는중')
          fetchNextPage() // 다음 페이지 데이터 가져오기
        }
      },
      {
        root: null, // 뷰포트를 기준으로 관찰 (기본값)
        rootMargin: '0px', // 기본 마진
        threshold: 0.8, // 타겟 엘리먼트가 100% 뷰포트에 들어왔을 때 콜백 실행
      },
    )
    if (veiwRef.current) {
      observer.observe(veiwRef.current)
    }

    return () => {
      if (veiwRef.current) {
        //ref가 화면에 렌더링 됐을 때
        observer.unobserve(veiwRef.current)
      }
      observer.disconnect() // 모든 관찰 중지 (선택 사항)
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

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

      <div ref={veiwRef} className='flex justify-center items-center m-20'>
        로딩중...
      </div>
    </div>
  )
}

export default PokeBook

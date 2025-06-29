import { useState } from 'react'
import usePokemonList from '../../hooks/usePokemonList'
import PokemonCard from './PokemonCard'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data } = usePokemonList()
  const filter = data?.pages.map((page) =>
    page.data.filter((pokemon) => pokemon.koreaName.includes(searchTerm)),
  )
  return (
    <div>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button>검색</button>
      {filter && filter.length > 0 && <PokemonCard filter={filter} />}
    </div>
  )
}

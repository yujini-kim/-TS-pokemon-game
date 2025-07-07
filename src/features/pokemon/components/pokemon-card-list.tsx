import type { PokemonDetails } from '../types/pokemon-api-types'
import PokemonCard from './pokemon-card'

interface PokemonCardListProps {
  filter: PokemonDetails[] | undefined
  onCardClick: (pokemonId: PokemonDetails) => void
}

export default function PokemonCardList({ filter, onCardClick }: PokemonCardListProps) {
  return (
    <div className='grid grid-cols-3 gap-y-4 overflow-y-auto max-h-120'>
      {filter?.map((poke) => (
        <div
          className='col-span-1 w-full h-full cursor-pointer'
          key={poke.pokemonID}
          onClick={() => onCardClick(poke)}
        >
          <PokemonCard
            pokemonID={poke.pokemonID}
            pokemonImg={poke.pokemonImg}
            koreaName={poke.koreaName}
            koreaTypeName={poke.koreaTypeName}
          />
        </div>
      ))}
    </div>
  )
}

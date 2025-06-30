import type { PokemonDetails } from '../../types/pokemon'

interface FilteredPokemonListProps {
  filter: PokemonDetails[][] | undefined
}

export default function PokemonCard({ filter }: FilteredPokemonListProps) {
  return (
    <div className='grid grid-cols-3 gap-y-4 overflow-y-auto max-h-120'>
      {filter?.map((pokemon) =>
        pokemon.map((poke) => (
          <div className='cols-span-1 w-full h-full' key={poke.pokemonID}>
            <div className='w-full h-full flex flex-col justify-center items-center gap-1'>
              <h1 className='font-semibold'>{poke.pokemonID}</h1>
              <img src={poke.pokemonImg} alt={poke.koreaName} width={70} />
              <p className='text-sm font-semibold'>{poke.koreaName}</p>
              <div className='flex gap-2 justify-center items-center'>
                <div className='flex gap-0.5 justify-center items-center'>
                  <img
                    className='size-3.5'
                    src={`./assets/image/types/${poke.koreaTypeName[0]}.webp`}
                  />
                  <p className='text-xs'>{poke.koreaTypeName[0]}</p>
                </div>
                {poke.koreaTypeName[1] && (
                  <div className='flex gap-0.5 justify-center items-center'>
                    <img
                      className='size-3.5'
                      src={`./assets/image/types/${poke.koreaTypeName[1]}.webp`}
                    />
                    <p className='text-xs'>{poke.koreaTypeName[1] ?? null}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )),
      )}
    </div>
  )
}

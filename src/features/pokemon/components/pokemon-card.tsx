import PokemonType from './pokemon-type'

interface PokemonCardProps {
  pokemonID: number | undefined
  pokemonImg: string | undefined
  koreaName: string | undefined
  koreaTypeName: (string | undefined)[]
}

export default function PokemonCard({
  pokemonID,
  pokemonImg,
  koreaName,
  koreaTypeName,
}: PokemonCardProps) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-1'>
      <h1 className='font-semibold'>{pokemonID}</h1>
      <img src={pokemonImg} alt={koreaName} width={70} />
      <p className='text-sm font-semibold'>{koreaName}</p>
      <PokemonType koreaTypeName={koreaTypeName} />
    </div>
  )
}

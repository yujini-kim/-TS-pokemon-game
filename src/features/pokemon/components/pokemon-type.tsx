export default function PokemonType({ koreaTypeName }: { koreaTypeName: (string | undefined)[] }) {
  return (
    <div className='flex gap-2 justify-center items-center'>
      <div className='flex gap-0.5 justify-center items-center'>
        <img className='size-3.5' src={`./assets/type-icon/${koreaTypeName[0]}.webp`} />
        <p className='text-xs'>{koreaTypeName[0]}</p>
      </div>
      {koreaTypeName[1] && (
        <div className='flex gap-0.5 justify-center items-center'>
          <img className='size-3.5' src={`./assets/type-icon/${koreaTypeName[1]}.webp`} />
          <p className='text-xs'>{koreaTypeName[1] ?? null}</p>
        </div>
      )}
    </div>
  )
}

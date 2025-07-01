const types = [
  '강철',
  '격투',
  '고스트',
  '노말',
  '독',
  '드래곤',
  '땅',
  '물',
  '바위',
  '벌레',
  '불꽃',
  '비행',
  '악',
  '얼음',
  '에스퍼',
  '전기',
  '페어리',
  '풀',
]
interface TypesBoxProps {
  selectedType: string
  setSelectedType: (value: string) => void
}

export default function TypesBox({ selectedType, setSelectedType }: TypesBoxProps) {
  return (
    <div className='grid grid-cols-5'>
      {types.map((type) => (
        <button
          key={type}
          onClick={() => {
            ;(setSelectedType(type === selectedType ? '' : type), console.log(type))
          }}
          id={type}
          className='col-span-1 flex justify-center items-center gap-1 cursor-pointer'
        >
          <img className='size-4' src={`./assets/image/types/${type}.webp`} />
          <p className='text-sm'>{type}</p>
        </button>
      ))}
    </div>
  )
}

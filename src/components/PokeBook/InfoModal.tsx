import StatBox from './StatBox'

interface ModalProps {
  ID: number
  name: string
  img: string
  flavorText: string
  HP: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
  onClose: () => void
}

export default function InfoModal({
  ID,
  name,
  img,
  flavorText,
  HP,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  onClose,
}: ModalProps) {
  return (
    <div className='fixed top-1/4 border border-black p-4 m-4 rounded-lg bg-white shadow-lg'>
      <div className='flex flex-col items-center gap-1'>
        <h1 className='text-2xl font-semibold'>{ID}</h1>
        <p className='font-semibold text-xl'>{name}</p>
        <img className='size-48' src={img} />
        <p className='text-sm text-center'>{flavorText}</p>
      </div>
      <div className='flex flex-col gap-3 mt-4'>
        <div className='grid grid-cols-3 gap-2'>
          <StatBox title='HP' value={HP} />
          <StatBox title='공격력' value={attack} />
          <StatBox title='방어력' value={defense} />
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <StatBox title='특수공격력' value={specialAttack} />
          <StatBox title='특수방어력' value={specialDefense} />
          <StatBox title='스피드' value={speed} />
        </div>
      </div>
      <button onClick={onClose}>닫기</button>
    </div>
  )
}

import StatBox from '../../components/PokeBook/ui/StatBox'

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
  onClose,
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
}: ModalProps) {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div
        className='border border-black p-4 m-4 rounded-lg bg-white shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
      >
        <div className='flex flex-col items-center gap-1'>
          <h1 id='modal-title' className='text-2xl font-semibold'>
            {ID}
          </h1>
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

        <div className='flex justify-end mt-4'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}

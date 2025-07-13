import Button from '../../../shared/components/button'
import type { StatsTypes } from '../types/stats-types'

import StateGrid from './state-grid'

interface ModalProps {
  stats: StatsTypes
  onClose: () => void
}

export default function PokemonDetailModal({ stats, onClose }: ModalProps) {
  const { ID, name, img, flavorText } = stats
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

        <StateGrid stats={stats} />
        <div className='flex justify-end mt-4'>
          <Button onClick={onClose}>닫기</Button>
        </div>
      </div>
    </div>
  )
}

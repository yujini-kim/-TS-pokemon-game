import type { StatsTypes } from '../types/stats-types'
import StatBox from './stat-box'

export default function StateGrid({ stats }: { stats: StatsTypes }) {
  const { HP, attack, defense, specialAttack, specialDefense, speed } = stats
  return (
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
  )
}

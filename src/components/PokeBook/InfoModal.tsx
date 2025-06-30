import StatBox from './StatBox'

export default function InfoModal() {
  return (
    <div className='border border-black p-4 rounded-lg bg-white shadow-lg'>
      <div className='flex flex-col items-center gap-1'>
        <h1 className='text-2xl font-semibold'>1</h1>
        <p className='font-semibold text-xl'>이상해씨</p>
        <img src='./assets/image/types/풀.webp' />
        <p className='text-sm'>태어나서 얼마 동안 등의 씨앗에 담긴 영양을 섭취하며 자란다</p>
      </div>
      <div className='flex flex-col gap-3 mt-4'>
        <div className='grid grid-cols-3 gap-2'>
          <StatBox title='HP' value={45} />
          <StatBox title='공격력' value={49} />
          <StatBox title='방어력' value={45} />
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <StatBox title='특수공격력' value={45} />
          <StatBox title='특수방어력' value={49} />
          <StatBox title='스피드' value={45} />
        </div>
      </div>
    </div>
  )
}

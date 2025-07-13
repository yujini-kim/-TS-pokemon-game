import { Link } from 'react-router-dom'

export default function CoinBox() {
  return (
    <Link
      to='/'
      className='w-12 h-12 py-1 flex flex-col justify-center fixed top-4 right-3  items-center border border-black rounded-lg cursor-pointer'
    >
      <img src='/assets/icon/coin-icon.webp' className='size-5' />
      <p className='text-sm'>0</p>
    </Link>
  )
}

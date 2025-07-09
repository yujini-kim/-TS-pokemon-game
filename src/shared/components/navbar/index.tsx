import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onMenuClick = () => setIsMenuOpen((prev) => !prev)
  return (
    <nav className='sticky top-0 left-0 w-full bg-MainColor-accent py-2 flex flex-col justify-center items-center'>
      <div>
        <img
          onClick={onMenuClick}
          className='size-8 fixed top-6 left-4 cursor-pointer'
          src='./assets/icon/berger-icon.png'
        />

        <Link to='/'>
          <img className='size-16' src='/assets/image/logo.png' alt='로고' />
        </Link>
      </div>

      {isMenuOpen && (
        <ul className='flex flex-col justify-center items-center text-sm gap-1'>
          <li className='hover:text-white'>
            <Link to=''>전체도감</Link>
          </li>
          <li className='hover:text-white'>
            <Link to=''>내도감</Link>
          </li>
          <li className='hover:text-white'>
            <Link to=''>게임</Link>
          </li>
          <li className='hover:text-white'>
            <Link to=''>코인</Link>
          </li>
          <li className='hover:text-white'>
            <Link to='/sign-in'>로그인</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

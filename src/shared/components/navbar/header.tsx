import { Link } from 'react-router-dom'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <nav className='sticky top-0 left-0 z-50 w-full bg-MainColor-accent py-2 flex flex-col justify-center items-center'>
      <div>
        <img
          onClick={onMenuClick}
          className='size-8 fixed top-6 left-4 cursor-pointer'
          src='/assets/icon/berger-icon.png'
        />

        <Link to='/'>
          <img className='size-16' src='/assets/image/logo.png' alt='로고' />
        </Link>
      </div>
    </nav>
  )
}

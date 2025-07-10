import { useNavigate } from 'react-router-dom'

interface MenuListProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  pathname: string
  text: string
}

export default function MenuList({ setIsMenuOpen, pathname, text }: MenuListProps) {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(pathname)
    setIsMenuOpen(false)
  }
  return (
    <li className='hover:text-white'>
      <button onClick={onClick}>{text}</button>
    </li>
  )
}

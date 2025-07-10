import { useState } from 'react'
import Menu from './menu'
import Header from './header'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onMenuClick = () => setIsMenuOpen((prev) => !prev)
  return (
    <>
      <Header onMenuClick={onMenuClick} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}

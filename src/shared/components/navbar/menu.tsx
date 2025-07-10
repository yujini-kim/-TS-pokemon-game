import { AnimatePresence, motion } from 'framer-motion'
import LogOutButton from './logout-button'
import { useContext } from 'react'
import { AuthContext } from '../../../context/auth-context'
import MenuList from './menu-list'

interface MenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  const isLoggedIn = useContext(AuthContext)
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.ul
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className='z-40 flex flex-col justify-center items-center text-sm gap-1 bg-MainColor-accent pb-4'
        >
          <MenuList setIsMenuOpen={setIsMenuOpen} pathname='/pokemon-book' text='전체도감' />
          <MenuList setIsMenuOpen={setIsMenuOpen} pathname='/mybook' text='내도감' />
          <MenuList setIsMenuOpen={setIsMenuOpen} pathname='/game' text='게임' />
          <MenuList setIsMenuOpen={setIsMenuOpen} pathname='/gacha' text='코인' />

          {isLoggedIn ? (
            <li className='hover:text-white'>
              <LogOutButton setIsMenuOpen={setIsMenuOpen} />
            </li>
          ) : (
            <li className='hover:text-white'>
              <MenuList setIsMenuOpen={setIsMenuOpen} pathname='/sign-in' text='로그인' />
            </li>
          )}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

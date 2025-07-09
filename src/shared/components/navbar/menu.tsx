import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
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
          <li className='hover:text-white'>
            <Link to='/pokemon'>전체도감</Link>
          </li>
          <li className='hover:text-white'>
            <Link to='/mypage'>내도감</Link>
          </li>
          <li className='hover:text-white'>
            <Link to='/game'>게임</Link>
          </li>
          <li className='hover:text-white'>
            <Link to='/coin'>코인</Link>
          </li>
          <li className='hover:text-white'>
            <Link to='/sign-in'>로그인</Link>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

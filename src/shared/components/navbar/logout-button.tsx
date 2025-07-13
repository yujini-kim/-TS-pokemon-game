import { signOut } from 'firebase/auth'
import { auth } from '../../../utils/firebase'
import { toast } from 'react-toastify'

export default function LogOutButton({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const logout = () =>
    signOut(auth)
      .then(() => {
        toast.success('로그아웃 완료')
        setIsMenuOpen(false)
      })
      .catch((e) => {
        console.error('로그아웃실패', e)
        toast.error('로그아웃 실패')
      })
  return (
    <button className='hover:text-white' onClick={logout}>
      로그아웃
    </button>
  )
}

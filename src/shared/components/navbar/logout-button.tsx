import { signOut } from 'firebase/auth'
import { auth } from '../../../utils/firebase'

export default function LogOutButton() {
  const logout = () =>
    signOut(auth)
      .then(() => {
        alert('로그아웃 완료')
      })
      .catch((e) => {
        console.error('로그아웃실패', e)
        alert('로그아웃 실패')
      })
  return <button onClick={logout}>로그아웃</button>
}

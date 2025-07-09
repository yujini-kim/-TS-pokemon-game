import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { auth } from '../../../utils/firebase'
import { useNavigate } from 'react-router-dom'

export default function useSocialLogin() {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider()

    try {
      await signInWithPopup(auth, googleProvider)
      alert('로그인 성공⭐')
      navigate('/')
    } catch (error) {
      console.error('Google 로그인 실패:', error)
      alert('로그인 실패🤔')
    }
  }

  const signInWithGithub = async () => {
    const githubProvider = new GithubAuthProvider()

    try {
      await signInWithPopup(auth, githubProvider)
      alert('로그인 성공⭐')
      navigate('/')
    } catch (error) {
      console.error('GitHub 로그인 실패:', error)
      alert('로그인 실패🤔')
    }
  }

  return { signInWithGoogle, signInWithGithub }
}

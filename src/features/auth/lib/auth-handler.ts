import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import type { SignInForm, SignUpForm } from '../model/schema'
import { auth } from '../../../utils/firebase'
import { useNavigate } from 'react-router-dom'

export const useAuthHandler = () => {
  const navigate = useNavigate()

  const handleSignUpForm = async (data: SignUpForm) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      alert('회원가입 성공⭐')
      navigate('/sign-in')
      console.log('회원가입 성공:', userCredential.user)
    } catch (error) {
      alert('회원가입 실패🤔')
      console.error('회원가입 실패:', error)
    }
  }

  const handleSignInForm = async (data: SignInForm) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      alert('로그인 성공⭐')
      navigate('/')
      console.log('로그인 성공:', userCredential.user)
    } catch (error) {
      alert('로그인 실패🤔')
      console.error('로그인 실패:', error)
    }
  }
  return { handleSignUpForm, handleSignInForm }
}

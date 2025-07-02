import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth } from '../../utils/firebase'

interface SignUpForm {
  username: string
  email: string
  password: string
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }, //유효성 검사 통과 여부 저장, 에러정보를 담고 있는 상태값
  } = useForm<SignUpForm>()

  const onSubmit = async (data: SignUpForm) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      console.log('회원가입 성공:', userCredential.user)
    } catch (error) {
      console.error('회원가입 실패:', error)
    }
  }

  return (
    <div className='w-full p-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-1/3'>
          <label htmlFor='username'>Username</label>
          <input
            {...register('username', { required: true })}
            type='text'
            id='username'
            className='border'
          />
          <label htmlFor='email'>E-mail</label>
          <input
            {...register('email', { required: true })}
            type='email'
            id='email'
            className='border'
          />
          <label htmlFor='password'>Password</label>
          <input
            {...register('password', { required: true })}
            type='password'
            id='password'
            className='border'
          />
          <label htmlFor='password'>Password Comform</label>
          <input
            {...register('password', { required: true })}
            type='password'
            id='password'
            className='border'
          />
          <button className='bg-blue-400 p-2 rounded-lg text-white mt-4'>Submit</button>
        </div>
      </form>
    </div>
  )
}

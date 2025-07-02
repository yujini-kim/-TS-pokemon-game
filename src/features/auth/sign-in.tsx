import { useForm } from 'react-hook-form'
import InputField from '../../components/auth/components/input-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../utils/firebase'
interface SignInForm {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요').email('유효한 이메일을 입력해주세요'),
  password: z.string().min(6, '비밀번호는 6자 이상 입력해주세요'),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'email@email.com',
      password: '',
    },
  })

  const onSubmit = async (data: SignInForm) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      console.log('로그인 성공:', userCredential.user)
    } catch (error) {
      console.error('로그인 실패:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full p-4'>
        <div className='flex flex-col gap-2 '>
          <InputField<SignInForm>
            label={'email'}
            id={'email'}
            type={'email'}
            register={register}
            error={errors.email?.message}
          />
          <InputField<SignInForm>
            label={'password'}
            id={'password'}
            type={'password'}
            register={register}
            error={errors.password?.message}
          />
        </div>
        <button className='bg-blue-400 p-2 rounded-lg text-white mt-4'>Submit</button>
      </form>
    </div>
  )
}

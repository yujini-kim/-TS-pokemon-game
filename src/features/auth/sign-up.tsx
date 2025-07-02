import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth } from '../../utils/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import InputField from '../../components/auth/components/input-field'
interface SignUpForm {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

const schema = z
  .object({
    username: z.string().min(1, '이름을 입력해주세요'),
    email: z.string().min(1, '이메일을 입력해주세요').email('유효한 이메일을 입력해주세요'),
    password: z.string().min(6, '비밀번호는 6자 이상 입력해주세요'),
    passwordConfirm: z.string().min(6, '비밀번호 확인은 6자 이상 입력해주세요'),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다',
        path: ['passwordConfirm'],
      })
    }
  })

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }, //유효성 검사 통과 여부 저장, 에러정보를 담고 있는 상태값
  } = useForm<SignUpForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: 'your name',
      email: 'email@email.com',
      password: '',
    },
  })

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
          <InputField<SignUpForm>
            label={'username'}
            id={'username'}
            type={'text'}
            register={register}
            error={errors.username?.message}
          />

          <InputField<SignUpForm>
            label={'email'}
            id={'email'}
            type={'email'}
            register={register}
            error={errors.email?.message}
          />

          <InputField<SignUpForm>
            label={'password'}
            id={'password'}
            type={'password'}
            register={register}
            error={errors.password?.message}
          />

          <InputField<SignUpForm>
            label={'passwordConfirm'}
            id={'passwordConfirm'}
            type={'password'}
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <button className='bg-blue-400 p-2 rounded-lg text-white mt-4'>Submit</button>
        </div>
      </form>
    </div>
  )
}

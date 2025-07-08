import Button from '../../../components/button'
import useAuthForm from '../hooks/use-hooks-form'
import { useAuthHandler } from '../lib/auth-handler'
import { signInSchema, type SignInForm } from '../model/schema'
import InputField from './input-field'

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAuthForm<SignInForm>(signInSchema, {
    email: '',
    password: '',
  })
  const { handleSignInForm } = useAuthHandler()
  const onSubmit = async (data: SignInForm) => {
    await handleSignInForm(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-2 '>
        <InputField<SignInForm>
          filedName={'이메알'}
          icon={'mail'}
          id={'email'}
          type={'email'}
          register={register}
          error={errors.email?.message}
        />
        <InputField<SignInForm>
          filedName={'비밀번호'}
          icon={'password'}
          id={'password'}
          type={'password'}
          register={register}
          error={errors.password?.message}
        />
      </div>
      <Button>로그인</Button>
    </form>
  )
}

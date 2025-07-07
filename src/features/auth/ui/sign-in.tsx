import InputField from '../components/input-field'
import Button from '../../../components/button'
import useAuthForm from '../hooks/use-hooks-form'
import { type SignInForm, signInSchema } from '../model/schema'
import { useAuthHandler } from '../lib/auth-handler'
import RedirectButton from '../components/redirect-button'
import SocialButton from '../components/social-button'
import useSocialLogin from '../lib/social-login'
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAuthForm<SignInForm>(signInSchema, {
    email: '',
    password: '',
  })

  const { handleSignInForm } = useAuthHandler()

  const { signInWithGoogle, signInWithGithub } = useSocialLogin()

  const onSubmit = async (data: SignInForm) => {
    await handleSignInForm(data)
  }

  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      <img src='./assets/image/singIcon.webp' className='w-60' />
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

      <RedirectButton message={'이미 회원이신가요?'} linkTo={'/sign-in'} linkText={'로그인 하기'} />
      <div className='flex gap-2 '>
        <SocialButton onClick={signInWithGoogle} img={'google'} title={'Google'} />
        <SocialButton onClick={signInWithGithub} img={'github'} title={'Github'} />
      </div>
    </div>
  )
}

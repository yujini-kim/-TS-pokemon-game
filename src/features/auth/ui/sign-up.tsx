import InputField from '../components/input-field'
import useAuthForm from '../hooks/use-hooks-form'
import { signUpSchema, type SignUpForm } from '../model/schema'
import { useAuthHandler } from '../lib/auth-handler'
import Button from '../../../components/button'
import { SIGN_UP_FIELDS } from '../constants/input-fields'
import SocialButton from '../components/social-button'
import useSocialLogin from '../lib/social-login'
import RedirectButton from '../components/redirect-button'

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }, //유효성 검사 통과 여부 저장, 에러정보를 담고 있는 상태값
  } = useAuthForm<SignUpForm>(signUpSchema, {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { handleSignUpForm } = useAuthHandler()

  const { signInWithGoogle, signInWithGithub } = useSocialLogin()

  const onSubmit = async (data: SignUpForm) => {
    await handleSignUpForm(data)
  }

  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      <img src='./assets/image/singIcon.webp' className='w-60' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
        {SIGN_UP_FIELDS.map(({ id, icon, type, filedName }) => (
          <InputField<SignUpForm>
            key={id}
            icon={icon}
            id={id}
            type={type}
            register={register}
            error={errors[id]?.message}
            filedName={filedName}
          />
        ))}
        <Button>회원가입</Button>
      </form>

      <RedirectButton message={'이미 회원이신가요?'} linkTo={'/sign-in'} linkText={'로그인 하기'} />
      <div className='flex gap-2 '>
        <SocialButton onClick={signInWithGoogle} img={'google'} title={'Google'} />
        <SocialButton onClick={signInWithGithub} img={'github'} title={'Github'} />
      </div>
    </div>
  )
}

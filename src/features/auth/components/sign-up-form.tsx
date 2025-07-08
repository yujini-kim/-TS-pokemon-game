import Button from '../../../components/button'
import { SIGN_UP_FIELDS } from '../constants/input-fields'
import useAuthForm from '../hooks/use-hooks-form'
import { useAuthHandler } from '../lib/auth-handler'
import { signUpSchema, type SignUpForm } from '../model/schema'
import InputField from './input-field'

export default function SignUpForm() {
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

  const onSubmit = async (data: SignUpForm) => {
    await handleSignUpForm(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
      {SIGN_UP_FIELDS.map(({ name, icon, type, placeholder }) => (
        <InputField<SignUpForm>
          key={name}
          icon={icon}
          name={name}
          type={type}
          placeholder={placeholder}
          register={register}
          error={errors[name]?.message}
        />
      ))}
      <Button>회원가입</Button>
    </form>
  )
}

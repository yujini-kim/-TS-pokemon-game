import InputField from '../../../components/input-field'
import useAuthForm from '../hooks/use-hooks-form'
import { signUpSchema, type SignUpForm } from '../model/schema'
import { useAuthHandler } from '../lib/auth-handler'
import Button from '../../../components/button'
import { SIGN_UP_FIELDS } from '../constants/input-fields'

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

  const onSubmit = async (data: SignUpForm) => {
    await handleSignUpForm(data)
  }

  return (
    <div className='w-full p-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-1/3'>
          {SIGN_UP_FIELDS.map(({ id, label, type }) => (
            <InputField<SignUpForm>
              key={id}
              label={label}
              id={id}
              type={type}
              register={register}
              error={errors[id]?.message}
            />
          ))}

          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}

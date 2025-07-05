import InputField from '../../../components/input-field'
import Button from '../../../components/button'
import useAuthForm from '../hooks/use-hooks-form'
import { type SignInForm, signInSchema } from '../model/schema'
import { useAuthHandler } from '../lib/auth-handler'
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

  const onSubmit = async (data: SignInForm) => {
    await handleSignInForm(data)
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
        <Button>Submit</Button>
      </form>
    </div>
  )
}

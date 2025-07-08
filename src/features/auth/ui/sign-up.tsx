import AuthPage from '../components/auth-page'
import HeaderImage from '../components/header-image'
import RedirectButton from '../components/redirect-button'
import SignUpForm from '../components/sign-up-form'
import SocialLogin from '../components/social-login'

export default function SignUp() {
  return (
    <AuthPage
      header={<HeaderImage />}
      form={<SignUpForm />}
      redirect={
        <RedirectButton
          message={'이미 회원이신가요?'}
          linkTo={'/sign-in'}
          linkText={'로그인 하기'}
        />
      }
      footer={<SocialLogin />}
    />
  )
}

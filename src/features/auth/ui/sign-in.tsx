import SignInForm from '../components/sign-in-form'
import HeaderImage from '../components/header-image'
import RedirectButton from '../components/redirect-button'

import SocialLogin from '../components/social-login'
import AuthPage from '../components/auth-page'

export default function SignIn() {
  return (
    <AuthPage
      header={<HeaderImage />}
      form={<SignInForm />}
      redirect={
        <RedirectButton
          message={'회원이 아니신가요?'}
          linkTo={'/sign-up'}
          linkText={'회원가입 하기'}
        />
      }
      footer={<SocialLogin />}
    />
  )
}

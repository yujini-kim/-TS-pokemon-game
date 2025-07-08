import useSocialLogin from '../lib/social-login'
import SocialButton from './social-button'

export default function SocialLogin() {
  const { signInWithGoogle, signInWithGithub } = useSocialLogin()

  return (
    <div className='flex gap-2 '>
      <SocialButton onClick={signInWithGoogle} img={'google'} title={'Google'} />
      <SocialButton onClick={signInWithGithub} img={'github'} title={'Github'} />
    </div>
  )
}

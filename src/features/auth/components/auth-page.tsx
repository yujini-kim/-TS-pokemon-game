type SignInPageProps = {
  header: React.ReactNode
  form: React.ReactNode
  redirect: React.ReactNode
  footer: React.ReactNode
}

export default function AuthPage({ header, form, redirect, footer }: SignInPageProps) {
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      {header}
      {form}
      {redirect}
      {footer}
    </div>
  )
}

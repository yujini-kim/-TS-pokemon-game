import { Link } from 'react-router-dom'

interface RedirectButtonProps {
  message: string
  linkTo: string
  linkText: string
}

export default function RedirectButton({ message, linkTo, linkText }: RedirectButtonProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <span className='text-xs'>{message}</span>
      <Link to={linkTo} className='text-xs text-[#F74D66]'>
        {linkText}
      </Link>
    </div>
  )
}

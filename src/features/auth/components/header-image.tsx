import { Link } from 'react-router-dom'

export default function HeaderImage() {
  return (
    <Link to='/'>
      <img src='./assets/image/greeting-image.webp' className='w-60' />
    </Link>
  )
}

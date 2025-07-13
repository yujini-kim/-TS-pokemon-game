interface SocialProps {
  img: string
  title: string
  onClick: () => Promise<void>
}

export default function SocialButton({ img, title, onClick }: SocialProps) {
  return (
    <button
      onClick={onClick}
      className='flex justify-center items-center gap-2 w-28 border p-1.5 rounded-xl border-MainColor-accent'
    >
      <img src={`./assets/icon/${img}-icon.webp`} className='size-4' />
      <span className='text-xs'>{title}</span>
    </button>
  )
}

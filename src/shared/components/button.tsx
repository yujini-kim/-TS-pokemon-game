export default function Button({
  onClick,
  children,
}: {
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <button
      className='bg-MainColor-accent mt-4 text-white text-xs px-4 py-2 rounded hover:bg-[#ff91a2] transition-colors'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

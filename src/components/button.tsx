export default function Button({
  onClick,
  children,
}: {
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <button
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

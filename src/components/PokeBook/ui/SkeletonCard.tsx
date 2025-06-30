export default function SkeletonCard() {
  return (
    <div className='animate-pulse flex flex-col items-center gap-2 p-4 border rounded'>
      <div className='w-12 h-4 bg-gray-300 rounded' />
      <div className='w-20 h-20 bg-gray-200 rounded' />
      <div className='w-16 h-4 bg-gray-300 rounded' />
      <div className='flex gap-2'>
        <div className='w-10 h-3 bg-gray-200 rounded' />
        <div className='w-10 h-3 bg-gray-200 rounded' />
      </div>
    </div>
  )
}

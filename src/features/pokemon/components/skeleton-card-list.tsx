import SkeletonCard from './SkeletonCard'

export default function SkeletonCardList({ count = 15 }: { count?: number }) {
  return (
    <div className='grid grid-cols-3 gap-y-4 max-h-120 overflow-y-auto'>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

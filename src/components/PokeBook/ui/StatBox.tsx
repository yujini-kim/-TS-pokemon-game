export default function StatBox({ title, value }: { title: string; value: number }) {
  return (
    <div className='col-span-1 flex flex-col justify-center items-center'>
      <h1 className='font-semibold'>{title}</h1>
      <span className='text-md'>{value}</span>
    </div>
  )
}

interface SortBarProps {
  selectedSort: string
  setSelectedSort: (value: string) => void
}

export default function SortBar({ selectedSort, setSelectedSort }: SortBarProps) {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value)
  }

  return (
    <select
      onChange={handleSortChange}
      value={selectedSort}
      className='w-40 h-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
    >
      <option>도감번호순</option>
      <option>이름순</option>
      <option>HP 높은순</option>
      <option>공격력 높은순</option>
      <option>방어력 높은순</option>
      <option>특수공격력 높은순</option>
      <option>특수방어력 높은순</option>
      <option>스피드 높은순</option>
    </select>
  )
}

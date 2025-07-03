interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='포켓몬 이름 검색'
      />
    </div>
  )
}

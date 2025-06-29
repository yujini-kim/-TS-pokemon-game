import { useEffect, useRef } from 'react'
import usePokemonList from '../hooks/usePokemonList'
import SearchBar from '../components/PokeBook/SearchBar'

function PokeBook() {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemonList()
  const veiwRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          console.log('다음페이지 불러오는중')
          fetchNextPage() // 다음 페이지 데이터 가져오기
        }
      },
      {
        root: null, // 뷰포트를 기준으로 관찰 (기본값)
        rootMargin: '0px', // 기본 마진
        threshold: 0.8, // 타겟 엘리먼트가 100% 뷰포트에 들어왔을 때 콜백 실행
      },
    )
    if (veiwRef.current) {
      observer.observe(veiwRef.current)
    }

    return () => {
      if (veiwRef.current) {
        //ref가 화면에 렌더링 됐을 때
        observer.unobserve(veiwRef.current)
      }
      observer.disconnect() // 모든 관찰 중지 (선택 사항)
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <div>
      <SearchBar />

      <div ref={veiwRef} className='flex justify-center items-center m-20'>
        로딩중...
      </div>
    </div>
  )
}

export default PokeBook

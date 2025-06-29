import { useEffect, useRef } from 'react'
import usePokemonList from './hooks/usePokemonList'

function PokeBook() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemonList()
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
      <h1>포켓몬 이름과 타입</h1>
      <div className='grid grid-cols-3 gap-y-4 overflow-y-auto max-h-120'>
        {data?.pages.map((page, pageIndex) =>
          page.data.map((poke, idx) => (
            <div className='cols-span-1 w-full h-full' key={`${pageIndex}-${idx}`}>
              <div className='w-full h-full flex flex-col justify-center items-center gap-1'>
                <h1 className='font-semibold'>{poke.pokemonID}</h1>
                <img src={poke.pokemonImg} alt={poke.koreaName} width={70} />
                <p className='text-sm font-semibold'>{poke.koreaName}</p>
                <div className='flex gap-2 justify-center items-center'>
                  <div className='flex gap-0.5 justify-center items-center'>
                    <img
                      className='size-3.5'
                      src={`./assets/image/types/${poke.koreaTypeName[0]}.webp`}
                    />
                    <p className='text-xs'>{poke.koreaTypeName[0]}</p>
                  </div>
                  {poke.koreaTypeName[1] && (
                    <div className='flex gap-0.5 justify-center items-center'>
                      <img
                        className='size-3.5'
                        src={`./assets/image/types/${poke.koreaTypeName[1]}.webp`}
                      />
                      <p className='text-xs'>{poke.koreaTypeName[1] ?? null}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )),
        )}
      </div>
      <div ref={veiwRef} className='flex justify-center items-center m-20'>
        로딩중...
      </div>
    </div>
  )
}

export default PokeBook

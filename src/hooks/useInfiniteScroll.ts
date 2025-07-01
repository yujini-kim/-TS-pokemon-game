import { useEffect } from 'react'

export default function useInfiniteScroll({
  viewRef,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: {
  viewRef: React.RefObject<HTMLDivElement | null>
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          console.log('다음페이지 불러오는중')
          fetchNextPage() // 다음 페이지 데이터 가져오는 함수
        }
      },
      {
        root: null, // 뷰포트를 기준으로 관찰 (기본값)
        rootMargin: '0px', // 기본 마진
        threshold: 1, // 타켓 엘리먼트가 뷰포트에 얼만큼 들어왔을때 실행되는지
      },
    )
    if (viewRef.current) {
      observer.observe(viewRef.current)
    }

    return () => {
      if (viewRef.current) {
        //viewRef가 null일경우 에러가 발생할 수 있어서 조건문 써줘야함
        observer.unobserve(viewRef.current)
      }
      observer.disconnect() // 모든 관찰 중지 (확실하게)
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, isFetchingNextPage])
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PokeBook from './PokeBook'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <PokeBook />
    </QueryClientProvider>
  )
}

export default App

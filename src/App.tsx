import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './router'
import { AuthProvider } from './context/auth-context'

function App() {
  const queryClient = new QueryClient()

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './router'
import { AuthProvider } from './context/auth-context'
import { ToastContainer } from 'react-toastify'
function App() {
  const queryClient = new QueryClient()

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position='top-center'
          limit={1}
          closeButton={true}
          autoClose={2000}
          hideProgressBar
        />
        <Router />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App

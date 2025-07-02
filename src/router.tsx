import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeBook from './components/PokeBook/PokeBook'
import SignUp from './components/auth/sign-up'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<PokeBook />} />
      </Routes>
    </BrowserRouter>
  )
}

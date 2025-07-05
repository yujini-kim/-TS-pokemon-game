import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeBook from './features/pokemon/ui/poke-book'
import SignUp from './features/auth/ui/sign-up'
import SignIn from './features/auth/ui/sign-in'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<PokeBook />} />
      </Routes>
    </BrowserRouter>
  )
}

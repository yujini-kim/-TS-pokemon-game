import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeBook from './features/pokemon/PokeBook'
import SignUp from './features/auth/sign-up'
import SignIn from './features/auth/sign-in'

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

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeBook from './components/PokeBook/PokeBook'
import SignUp from './components/auth/sign-up'
import SignIn from './components/auth/sign-in'

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

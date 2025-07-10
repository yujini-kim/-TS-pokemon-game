import { createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'

export const AuthContext = createContext<boolean | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log('✔️ 유저 로그인 여부:', isLoggedIn)
  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        console.log('유저정보', user)
        if (user) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      }),
    [],
  )
  return <AuthContext.Provider value={isLoggedIn}>{children}</AuthContext.Provider>
}

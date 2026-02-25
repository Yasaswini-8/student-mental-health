import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user in localStorage
    const initializeAuth = () => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser)
          console.log('Found user in localStorage:', userData)
          setUser(userData)
        } catch (error) {
          console.error('Error parsing stored user data:', error)
          localStorage.removeItem('user')
        }
      }
      setLoading(false)
    }

    initializeAuth()
  }, [])

  const login = (userData) => {
    console.log('Logging in user:', userData)
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    console.log('Logging out user')
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
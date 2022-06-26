import { createContext, useState, useEffect, useContext } from 'react'
import api from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@Auth:user')
    const storagedToken = localStorage.getItem('@Auth:token')

    if (storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`
      setUser(JSON.parse(storagedUser))
    }
  }, [])

  async function signIn(credentials, callback) {
    try {
      const response = await api.post('users/login', credentials)

      if (response.data.token) {
        setUser(response.data.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

        localStorage.setItem('@Auth:user', JSON.stringify(response.data.user))
        localStorage.setItem('@Auth:token', response.data.token)

        callback('Autenticado com sucesso!', undefined);
      } else {
        callback(undefined, 'Falha na autenticação!');
      }
    } catch (err) {
      callback(undefined, 'Falha na autenticação!');
    }
  }

  function signOut() {
    setUser(null)

    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
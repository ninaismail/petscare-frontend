import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const {dispatch}  = useAuthContext()

  const signup = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    dispatch({ type: 'LOGIN', payload: data })
    window.location.pathname = '/profile'
  }

  return { signup }
}

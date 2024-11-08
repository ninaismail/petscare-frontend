import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const {dispatch}  = useAuthContext()

    const signin = (data) => {
      localStorage.setItem('user', JSON.stringify(data))
      dispatch({ type: 'LOGIN', payload: data })
      window.location.pathname = '/'
  }

  return { signin }
}

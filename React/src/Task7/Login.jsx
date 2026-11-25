import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function Login() {

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin() {
    login()
    navigate('/dashboard')
  }

  return (
    <>
      <h2>Login Page</h2>

      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function Dashboard() {

  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <>
      <h2>Dashboard Page</h2>

      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard
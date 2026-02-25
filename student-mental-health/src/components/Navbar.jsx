import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to={user?.role === 'admin' ? '/admin' : '/'}>
            <strong>MindWell</strong>
          </Link>
        </div>

        {user ? (
          <div>
            {user.role === 'student' && (
              <>
                <Link to="/">Home</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/forums">Forums</Link>
              </>
            )}

            {user.role === 'admin' && (
              <>
                <Link to="/admin">Admin Home</Link>
                <Link to="/admin/resources">Manage Resources</Link>
              </>
            )}

            <button
              onClick={handleLogout}
              style={{ marginLeft: '1.5rem', background: 'rgba(255,255,255,0.2)', color: 'white' }}
              className="btn"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  )
}
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth()

  // Show loading state while checking auth
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.5rem'
      }}>
        Loading...
      </div>
    )
  }

  console.log('ProtectedRoute - User:', user)
  console.log('ProtectedRoute - Allowed Roles:', allowedRoles)

  if (!user) {
    console.log('No user found, redirecting to login')
    return <Navigate to="/login" replace />
  }

  if (!allowedRoles.includes(user.role)) {
    console.log('User role not allowed, redirecting to home')
    return <Navigate to="/" replace />
  }

  console.log('User authorized, showing protected content')
  return children
}
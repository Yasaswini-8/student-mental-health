// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// ── Pages ────────────────────────────────────────────────
import HomeWelcome from './pages/HomeWelcome';     // ← must have this
import SignUp        from './pages/SignUp';         // ← must have this
import Login         from './pages/Login';
import Dashboard     from './pages/Dashboard';
import Resources     from './pages/Resources';
import Schedule      from './pages/Schedule';
import Forums        from './pages/Forums';
import AdminDashboard    from './pages/Admin/AdminDashboard';
import ManageResources   from './pages/Admin/ManageResources';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <div className="container" style={{ marginTop: '1.5rem', minHeight: 'calc(100vh - 120px)' }}>
          <Routes>
            <Route path="/"           element={<HomeWelcome />} />

            <Route path="/signup"     element={<SignUp />} />
            <Route path="/login"      element={<Login />} />

            {/* Student protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Dashboard />
              </ProtectedRoute>
            } />

            <Route path="/resources" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Resources />
              </ProtectedRoute>
            } />

            <Route path="/schedule" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Schedule />
              </ProtectedRoute>
            } />

            <Route path="/forums" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Forums />
              </ProtectedRoute>
            } />

            {/* Admin protected routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            <Route path="/admin/resources" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageResources />
              </ProtectedRoute>
            } />

            {/* Catch-all */}
            <Route path="*" element={
              <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <h1>404 – Page not found</h1>
                <p style={{ marginTop: '1.5rem' }}>
                  <a href="/" style={{ color: '#4f46e5' }}>Go back to home</a>
                </p>
              </div>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
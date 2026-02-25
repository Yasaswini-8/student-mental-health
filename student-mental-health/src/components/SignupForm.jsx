import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export function SignupForm() {
  const [signupForm, setSignupForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    role: 'student',
    college: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      setError('Please fill all required fields');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Sending signup request with data:', signupForm); // Debug log
      const res = await axios.post('http://localhost:5000/api/auth/signup', signupForm);
      console.log('Signup response:', res.data); // Debug log
      login(res.data.user);
      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Signup error:', err); // Debug log
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', err.response.data);
        console.error('Error response status:', err.response.status);
        console.error('Error response headers:', err.response.headers);
        setError(err.response.data.message || 'Signup failed: ' + err.response.status);
      } else if (err.request) {
        // The request was made but no response was received
        console.error('Error request:', err.request);
        setError('Network error: Could not reach server. Make sure the backend is running.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', err.message);
        setError('Signup failed: ' + err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Placeholder for social signup functions
  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // In a real implementation, this would connect to Google OAuth
    alert('Google signup would be implemented here');
  };

  return (
    <div className="auth-container">
      <h1>MindWell</h1>
      <div className="signup-form">
        <h2>Join MindWell</h2>
        <p>Create your account to start your wellness journey</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSignupSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={signupForm.name}
            onChange={handleSignupChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="College Email"
            value={signupForm.email}
            onChange={handleSignupChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupForm.password}
            onChange={handleSignupChange}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="College Name (Optional)"
            value={signupForm.college}
            onChange={handleSignupChange}
          />
          <select 
            name="role" 
            value={signupForm.role}
            onChange={handleSignupChange}
            className="form-control"
          >
            <option value="student">Student</option>
            <option value="admin">Admin (for testing)</option>
          </select>
          
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <div className="social-login-section">
          <div className="divider">
            <span>or sign up with</span>
          </div>
          <button type="button" className="social-btn google" onClick={handleGoogleSignup}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign up with Google
          </button>
        </div>
        
        <div className="contact-section">
          <h3>Need Help?</h3>
          <p>Contact our support team:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> support@mindwell.edu</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Crisis Hotline:</strong> 988 (National Suicide Prevention Lifeline)</p>
          </div>
        </div>
        
        <div className="auth-links">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
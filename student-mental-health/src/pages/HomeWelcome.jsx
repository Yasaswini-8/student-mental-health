// src/pages/HomeWelcome.jsx
import { Link } from 'react-router-dom';

export default function HomeWelcome() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 70px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        Welcome to MindWell
      </h1>
      
      <p style={{ 
        fontSize: '1.4rem', 
        maxWidth: '700px', 
        marginBottom: '3rem', 
        color: 'rgba(255,255,255,0.9)',
        lineHeight: '1.6'
      }}>
        A safe space for students to access mental health resources, book counseling sessions, 
        and connect with peer support groups. Your journey to wellness starts here.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
        <Link 
          to="/signup"
          className="btn btn-primary"
          style={{ 
            padding: '1.2rem 2.5rem', 
            fontSize: '1.2rem',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            borderRadius: '40px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Create Account (Sign Up)
        </Link>
        
        <Link 
          to="/login"
          className="btn"
          style={{ 
            padding: '1.2rem 2.5rem', 
            fontSize: '1.2rem',
            background: 'rgba(255,255,255,0.9)',
            color: '#667eea',
            borderRadius: '40px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
        >
          Already have an account? Login
        </Link>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '3rem', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        maxWidth: '800px',
        marginTop: '2rem'
      }}>
        <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
          <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Mental Wellness</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Resources and tools for your mental health journey</p>
        </div>
        
        <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
          <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Peer Support</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Connect with others who understand your journey</p>
        </div>
        
        <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
          <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Professional Help</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Book sessions with qualified counselors</p>
        </div>
      </div>

      <p style={{ marginTop: '4rem', color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
        Made with ❤️ for student mental wellness in Hyderabad and beyond
      </p>
    </div>
  );
}
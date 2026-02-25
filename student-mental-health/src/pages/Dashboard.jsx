import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
        <div className="card">
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.8rem' }}>
            <li><Link to="/resources">Mental Health Resources</Link></li>
            <li><Link to="/schedule">Book Counseling Session</Link></li>
            <li><Link to="/forums">Peer Support Forums</Link></li>
          </ul>
        </div>

        <div className="card">
          <h3>Today's Tip</h3>
          <p>Take 5 deep breaths right now. It helps reduce acute stress.</p>
        </div>
      </div>
    </div>
  )
}
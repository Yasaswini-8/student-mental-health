export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="card">
          <h3>Quick Stats</h3>
          <p>Active sessions today: —</p>
          <p>Total users: —</p>
        </div>

        <div className="card">
          <h3>Manage</h3>
          <p><a href="/admin/resources">Resources</a></p>
          <p>Sessions (coming soon)</p>
          <p>Users (coming soon)</p>
        </div>
      </div>
    </div>
  )
}
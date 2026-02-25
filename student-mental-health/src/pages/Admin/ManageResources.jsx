export default function ManageResources() {
  return (
    <div>
      <h1>Manage Resources</h1>

      <div className="card" style={{ maxWidth: '700px' }}>
        <h3>Add New Resource</h3>
        <form>
          <input className="form-control" placeholder="Title" />
          <textarea className="form-control" rows="4" placeholder="Description"></textarea>
          <input className="form-control" placeholder="URL" />
          <select className="form-control">
            <option value="">Select type</option>
            <option>article</option>
            <option>video</option>
            <option>pdf</option>
          </select>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Save Resource
          </button>
        </form>
      </div>

      <h3 style={{ margin: '2.5rem 0 1rem' }}>Existing Resources</h3>
      <p>(List will come from backend)</p>
    </div>
  )
}
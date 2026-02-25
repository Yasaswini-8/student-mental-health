export default function ResourceCard({ resource }) {
  const { title, description, type, url, category } = resource || {}

  return (
    <div className="card">
      <h3>{title || 'Untitled'}</h3>
      {category && <small style={{ color: '#6b7280' }}>{category}</small>}
      <p style={{ margin: '0.8rem 0' }}>{description || 'No description'}</p>

      {url && (
        <div style={{ marginTop: '1rem' }}>
          {type === 'video' && <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch Video</a>}
          {type === 'pdf' && <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open PDF</a>}
          {type === 'article' && <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read Article</a>}
          {!type && <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>}
        </div>
      )}
    </div>
  )
}
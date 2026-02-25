import { useState, useEffect } from 'react'
import ResourceCard from '../components/ResourceCard'

export default function Resources() {
  const [resources, setResources] = useState([])

  useEffect(() => {
    // Fake data – replace with axios.get('/api/resources')
    setResources([
      { id: 1, title: "Understanding Anxiety", description: "Basic guide", type: "article", url: "https://example.com", category: "Anxiety" },
      { id: 2, title: "Breathing Exercise", description: "5 min video", type: "video", url: "https://youtube.com/...", category: "Relaxation" },
    ])
  }, [])

  return (
    <div>
      <h1>Resources</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {resources.map(r => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>
    </div>
  )
}
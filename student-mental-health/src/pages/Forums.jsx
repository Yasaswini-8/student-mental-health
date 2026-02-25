import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Forums() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load forum posts. Is the backend running?');
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post('http://localhost:5000/api/posts', {
        title,
        content,
        anonymous
      });

      // Clear form
      setTitle('');
      setContent('');
      setAnonymous(false);

      // Refresh posts
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);

      alert('Post created successfully!');
    } catch (err) {
      alert('Failed to create post. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '4rem' }}>Loading...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '4rem' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Peer Support Forums</h1>

      {/* Create Post Form */}
      <div style={{
        background: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Create New Post</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem' }}
          />
          <textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="4"
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem' }}
          />
          <label>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
            Post anonymously
          </label>
          <br />
          <button
            type="submit"
            disabled={submitting}
            style={{
              background: '#6366f1',
              color: 'white',
              padding: '0.8rem 1.5rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            {submitting ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <p style={{ color: '#6b7280' }}>No posts yet. Be the first to share!</p>
      ) : (
        <div>
          <h3>Recent Posts</h3>
          {posts.map(post => (
            <div key={post.id} style={{
              background: 'white',
              padding: '1.2rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <small style={{ color: '#6b7280' }}>
                {post.anonymous ? 'Anonymous' : 'Posted by user'} • {new Date(post.created_at).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      )}

      <p style={{ color: '#6b7280', marginTop: '2rem' }}>
        You can post anonymously.
      </p>
    </div>
  );
}
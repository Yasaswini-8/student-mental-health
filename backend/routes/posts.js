const express = require('express');
const pool = require('../config/db');  // your MySQL connection pool

const router = express.Router();  // ← This line was missing!

// GET all posts (already working)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ message: 'Server error while fetching posts' });
  }
});

// POST new post (this is the part that crashed)
router.post('/', async (req, res) => {
  const { title, content, anonymous = false } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO posts (title, content, anonymous) VALUES (?, ?, ?)',
      [title, content, anonymous ? 1 : 0]
    );

    res.status(201).json({
      message: 'Post created successfully',
      postId: result.insertId
    });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Server error while creating post' });
  }
});

module.exports = router;
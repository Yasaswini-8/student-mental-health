const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware (must come first)
app.use(cors()); // Allow all origins for development
app.use(express.json());

// Routes (add them here – order matters only for overlapping paths)
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/resources', require('./routes/resources'));
// app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/posts', require('./routes/posts'));      // ← added here

// Root route (optional – good for testing)
app.get('/', (req, res) => {
  res.json({ message: 'MindWell Backend is running' });
});

// Start server (must be last)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
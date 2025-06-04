const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API routes - rozdělené podle entit
const sportsRoutes = require('./api/sports');
app.use('/api', sportsRoutes);

const locationsRoutes = require('./api/locations');
app.use('/api', locationsRoutes);

const reservationsRoutes = require('./api/reservations');
app.use('/api', reservationsRoutes);

// Handle 404 errors for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Handle 404 errors for other routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

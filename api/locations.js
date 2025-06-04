const express = require('express');
const db = require('../database/db');

const router = express.Router();

// SPORT LOCATIONS ROUTES
// List all sport locations
router.get('/locations', (req, res) => {
  db.all(`
    SELECT sl.*, s.name as sport_name 
    FROM sport_locations sl
    LEFT JOIN sports s ON sl.sport_id = s.id
  `, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Get a single sport location
router.get('/locations/:id', (req, res) => {
  db.get(`
    SELECT sl.*, s.name as sport_name 
    FROM sport_locations sl
    LEFT JOIN sports s ON sl.sport_id = s.id
    WHERE sl.id = ?
  `, [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Location not found' });
    res.json(row);
  });
});

// Create a new sport location
router.post('/locations', (req, res) => {
  const { name, location, sport_id } = req.body;
  db.run(
    'INSERT INTO sport_locations (name, location, sport_id) VALUES (?, ?, ?)',
    [name, location, sport_id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Update a sport location
router.put('/locations/:id', (req, res) => {
  const { name, location, sport_id } = req.body;
  db.run(
    'UPDATE sport_locations SET name = ?, location = ?, sport_id = ? WHERE id = ?',
    [name, location, sport_id, req.params.id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Location not found' });
      res.json({ changes: this.changes });
    }
  );
});

// Delete a sport location
router.delete('/locations/:id', (req, res) => {
  db.run('DELETE FROM sport_locations WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Location not found' });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
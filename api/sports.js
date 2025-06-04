const express = require('express');
const db = require('../database/db');

const router = express.Router();

// SPORTS ROUTES (read-only)
router.get('/sports', (req, res) => {
  db.all('SELECT * FROM sports', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Get a single sport
router.get('/sports/:id', (req, res) => {
  db.get('SELECT * FROM sports WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Sport not found' });
    res.json(row);
  });
});

module.exports = router;
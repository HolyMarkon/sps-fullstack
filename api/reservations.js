const express = require('express');
const db = require('../database/db');

const router = express.Router();

// RESERVATIONS ROUTES
// List all reservations
router.get('/reservations', (req, res) => {
  db.all(`
    SELECT r.*, sl.name as location_name 
    FROM reservations r
    LEFT JOIN sport_locations sl ON r.location_id = sl.id
  `, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Get a single reservation
router.get('/reservations/:id', (req, res) => {
  db.get(`
    SELECT r.*, sl.name as location_name 
    FROM reservations r
    LEFT JOIN sport_locations sl ON r.location_id = sl.id
    WHERE r.id = ?
  `, [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Reservation not found' });
    res.json(row);
  });
});

// Create a new reservation
router.post('/reservations', (req, res) => {
  const { firstname, lastname, date, time_slot, location_id } = req.body;
  db.run(
    'INSERT INTO reservations (firstname, lastname, date, time_slot, location_id) VALUES (?, ?, ?, ?, ?)',
    [firstname, lastname, date, time_slot, location_id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Update a reservation
router.put('/reservations/:id', (req, res) => {
  const { firstname, lastname, date, time_slot, location_id } = req.body;
  db.run(
    'UPDATE reservations SET firstname = ?, lastname = ?, date = ?, time_slot = ?, location_id = ? WHERE id = ?',
    [firstname, lastname, date, time_slot, location_id, req.params.id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Reservation not found' });
      res.json({ changes: this.changes });
    }
  );
});

// Delete a reservation
router.delete('/reservations/:id', (req, res) => {
  db.run('DELETE FROM reservations WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Reservation not found' });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
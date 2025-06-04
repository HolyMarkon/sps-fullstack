const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Vytvoření připojení k databázi
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Chyba při připojení k databázi:', err.message);
  } else {
    console.log('Připojeno k SQLite databázi.');
  }
});

module.exports = db;

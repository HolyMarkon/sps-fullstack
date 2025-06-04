-- Drop tables if they exist to avoid conflicts
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS sport_locations;
DROP TABLE IF EXISTS sports;

-- Create sports table (seedovaná tabulka)
CREATE TABLE IF NOT EXISTS sports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

-- Create sport_locations table
CREATE TABLE IF NOT EXISTS sport_locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  sport_id INTEGER,
  FOREIGN KEY (sport_id) REFERENCES sports(id)
);

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  date TEXT NOT NULL,
  time_slot TEXT NOT NULL,
  location_id INTEGER,
  FOREIGN KEY (location_id) REFERENCES sport_locations(id)
);

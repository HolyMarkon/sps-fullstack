const db = require('./db');
const fs = require('fs');
const path = require('path');

// Načtení schématu databáze
const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

// Spuštění schématu pro vytvoření tabulek
db.exec(schema, (err) => {
  if (err) {
    console.error('Chyba při vytváření tabulek:', err.message);
    return;
  }
  console.log('Tabulky byly úspěšně vytvořeny.');

  // Vložení ukázkových sportů
  const sports = [
    { name: 'Fotbal' },
    { name: 'Tenis' },
    { name: 'Basketbal' },
    { name: 'Volejbal' },
    { name: 'Plavání' },
    { name: 'Badminton' },
    { name: 'Hokej' },
    { name: 'Florbal' }
  ];

  // Vložení sportů do databáze
  const insertSport = db.prepare('INSERT INTO sports (name) VALUES (?)');
  sports.forEach(sport => {
    insertSport.run(sport.name);
  });
  insertSport.finalize();
  console.log('Sporty byly úspěšně vloženy.');

  // Vložení ukázkových sportovišť
  const locations = [
    { name: 'Městský stadion', location: 'Sportovní 123, Česká Lípa', sport_id: 1 },
    { name: 'Tenisové kurty', location: 'U Parku 456, Česká Lípa', sport_id: 2 },
    { name: 'Sportovní hala', location: 'Školní 789, Česká Lípa', sport_id: 3 },
    { name: 'Plavecký bazén', location: 'Vodní 101, Česká Lípa', sport_id: 5 }
  ];

  // Vložení sportovišť do databáze
  const insertLocation = db.prepare('INSERT INTO sport_locations (name, location, sport_id) VALUES (?, ?, ?)');
  locations.forEach(loc => {
    insertLocation.run(loc.name, loc.location, loc.sport_id);
  });
  insertLocation.finalize();
  console.log('Sportoviště byla úspěšně vložena.');

  // Vložení ukázkových rezervací
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const reservations = [
    { firstname: 'Jan', lastname: 'Novák', date: today.toISOString().split('T')[0], time_slot: '14:00-15:00', location_id: 1 },
    { firstname: 'Marie', lastname: 'Svobodová', date: tomorrow.toISOString().split('T')[0], time_slot: '16:00-17:00', location_id: 2 },
    { firstname: 'Petr', lastname: 'Černý', date: tomorrow.toISOString().split('T')[0], time_slot: '10:00-11:00', location_id: 3 }
  ];

  // Vložení rezervací do databáze
  const insertReservation = db.prepare('INSERT INTO reservations (firstname, lastname, date, time_slot, location_id) VALUES (?, ?, ?, ?, ?)');
  reservations.forEach(res => {
    insertReservation.run(res.firstname, res.lastname, res.date, res.time_slot, res.location_id);
  });
  insertReservation.finalize();
  console.log('Rezervace byly úspěšně vloženy.');

  console.log('Databáze byla úspěšně naplněna ukázkovými daty.');
  
  // Zavření připojení k databázi
  db.close();
});

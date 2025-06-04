-- Seed sports data
INSERT INTO sports (name) VALUES 
('Fotbal'),
('Tenis'),
('Basketbal'),
('Volejbal'),
('Badminton');

-- Seed sport_locations data
INSERT INTO sport_locations (name, location, sport_id) VALUES 
('Městský stadion u Ploučnice - UMT', 'Stadion u Ploučnice', 1),
('Městský stadion u Ploučnice - hřiště 1', 'Stadion u Ploučnice', 2),
('Tenisové kurty - venkovní', 'Stadion u Ploučnice', 2),
('Tenisové kurty - vnitřní', 'Stadion u Ploučnice', 3),
('Basketbalové hřiště', 'Stadion u Ploučnice', 4);

-- Seed some sample reservations
INSERT INTO reservations (firstname, lastname, date, time_slot, location_id) VALUES 
('Jan', 'Novák', '2023-06-15', '14:00-15:00', 1),
('Marie', 'Svobodová', '2023-06-16', '16:00-17:00', 2),
('Petr', 'Dvořák', '2023-06-17', '10:00-11:00', 3);

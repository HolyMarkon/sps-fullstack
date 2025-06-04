# Architektura aplikace

Tato stránka popisuje architekturu aplikace Sport Česká Lípa - Rezervační systém sportovišť.

## Přehled

Aplikace je postavena na architektuře klient-server s následujícími komponentami:

- **Frontend**: Statické HTML, CSS a JavaScript soubory
- **Backend**: Node.js s Express.js frameworkem
- **Databáze**: SQLite3 pro ukládání dat

## Struktura projektu

```
sport-cl-rezervacni-system/
├── api/                  # API endpointy
│   ├── sports.js         # Endpointy pro sporty
│   ├── locations.js      # Endpointy pro sportoviště
│   └── reservations.js   # Endpointy pro rezervace
├── database/             # Databázové soubory
│   ├── db.js             # Připojení k databázi
│   ├── schema.sql        # Schéma databáze
│   ├── seed.js           # Skript pro naplnění databáze
│   └── database.sqlite   # SQLite databázový soubor
├── docs/                 # Dokumentace (VitePress)
├── public/               # Statické soubory
│   ├── assets/           # CSS, obrázky, ikony
│   ├── index.html        # Hlavní HTML soubor
│   └── 404.html          # Stránka pro chybu 404
├── server.js             # Hlavní soubor aplikace
├── package.json          # Závislosti a skripty
└── README.md             # Základní informace o projektu
```

## Databázový model

Aplikace používá následující databázové tabulky:

### sports

Tabulka obsahuje seznam sportů.

| Sloupec | Typ | Popis |
|---------|-----|-------|
| id | INTEGER | Primární klíč |
| name | TEXT | Název sportu |

### sport_locations

Tabulka obsahuje seznam sportovišť.

| Sloupec | Typ | Popis |
|---------|-----|-------|
| id | INTEGER | Primární klíč |
| name | TEXT | Název sportoviště |
| location | TEXT | Adresa sportoviště |
| sport_id | INTEGER | Cizí klíč na tabulku sports |

### reservations

Tabulka obsahuje seznam rezervací.

| Sloupec | Typ | Popis |
|---------|-----|-------|
| id | INTEGER | Primární klíč |
| firstname | TEXT | Jméno rezervujícího |
| lastname | TEXT | Příjmení rezervujícího |
| date | TEXT | Datum rezervace |
| time_slot | TEXT | Časový slot rezervace |
| location_id | INTEGER | Cizí klíč na tabulku sport_locations |

## API

Aplikace poskytuje REST API pro přístup k datům. API je rozděleno do tří hlavních částí:

- **/api/sports** - Endpointy pro práci se sporty
- **/api/locations** - Endpointy pro práci se sportovišti
- **/api/reservations** - Endpointy pro práci s rezervacemi

Podrobná dokumentace API je k dispozici v sekci [API Dokumentace](/api/).

## Frontend

Frontend aplikace je postaven na čistém HTML, CSS a JavaScriptu bez použití frameworků. Hlavní funkce frontendu:

- Zobrazení seznamu sportovišť a rezervací
- Formuláře pro vytváření a úpravu sportovišť a rezervací
- Validace formulářů
- Komunikace s API pomocí Fetch API
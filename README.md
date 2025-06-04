# Marek Holuška
---
# Rezervační systém na sportoviště

Aplikace pro správu sportovišť a rezervací. Uživatelé mohou vytvářet, upravovat a mazat sportoviště a rezervace.

## Funkce

- Správa sportovišť (CRUD operace)
- Správa rezervací (CRUD operace)
- Přehledné zobrazení všech sportovišť a rezervací
- Předvyplněný seznam sportů

## Technologie

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Databáze: SQLite3

## Spuštění aplikace

1. Naklonujte repozitář
2. Nainstalujte závislosti: `npm install`
3. Spusťte aplikaci: `npm start`
4. Pro naplnění databáze ukázkovými daty: `npm run seed`
5. Aplikace běží na adrese: http://localhost:3000

## Dokumentace

Projekt obsahuje podrobnou dokumentaci vytvořenou pomocí VitePress.

1. Spuštění dokumentace v režimu vývoje: `npm run docs:dev`
2. Vytvoření produkční verze dokumentace: `npm run docs:build`
3. Náhled produkční verze dokumentace: `npm run docs:preview`

Dokumentace obsahuje:
- Podrobný návod k použití
- API dokumentaci
- Popis architektury aplikace
- ER diagram databáze

## Struktura projektu

- `/api` - API endpointy
- `/database` - Databázové soubory a skripty
- `/public` - Statické soubory (HTML, CSS, JavaScript)
- `/docs` - Dokumentace (VitePress)
- `server.js` - Hlavní soubor aplikace

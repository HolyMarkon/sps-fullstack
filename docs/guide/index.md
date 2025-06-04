# Návod k použití

Tento návod vás provede základními funkcemi aplikace Sport Česká Lípa - Rezervační systém sportovišť.

## Instalace a spuštění

1. Naklonujte repozitář
2. Nainstalujte závislosti:
   ```bash
   npm install
   ```
3. Naplňte databázi ukázkovými daty:
   ```bash
   npm run seed
   ```
4. Spusťte aplikaci:
   ```bash
   npm start
   ```
5. Otevřete prohlížeč a přejděte na adresu: `http://localhost:3000`

## Přístup k dokumentaci

Dokumentace je vytvořena pomocí VitePress a obsahuje podrobné informace o architektuře aplikace, API a dalších aspektech.

### Spuštění dokumentace v režimu vývoje

1. Spusťte dokumentaci v režimu vývoje:
   ```bash
   npm run docs:dev
   ```
2. Otevřete prohlížeč a přejděte na adresu: `http://localhost:5173`
3. Nyní můžete procházet dokumentaci a vidět změny v reálném čase

### Vytvoření produkční verze dokumentace

1. Vytvořte produkční verzi dokumentace:
   ```bash
   npm run docs:build
   ```
2. Výsledná dokumentace bude uložena v adresáři `docs/.vitepress/dist`
3. Pro náhled produkční verze spusťte:
   ```bash
   npm run docs:preview
   ```
4. Otevřete prohlížeč a přejděte na adresu: `http://localhost:4173`

### Struktura dokumentace

Dokumentace je rozdělena do několika sekcí:

- **Úvod** - Základní informace o aplikaci
- **Návod** - Podrobný návod k použití aplikace
- **API Dokumentace** - Popis dostupných API endpointů
- **Architektura** - Popis architektury aplikace
- **ER Diagram** - Entity-Relationship diagram databáze

## Správa sportovišť

### Přidání nového sportoviště

1. Přejděte na záložku "Sportoviště"
2. Vyplňte formulář pro přidání sportoviště:
   - Název sportoviště
   - Adresa
   - Vyberte sport z rozbalovacího seznamu
3. Klikněte na tlačítko "Přidat sportoviště"

### Úprava sportoviště

1. V seznamu sportovišť klikněte na ikonu tužky u sportoviště, které chcete upravit
2. Upravte údaje ve formuláři
3. Klikněte na tlačítko "Aktualizovat sportoviště"

### Smazání sportoviště

1. V seznamu sportovišť klikněte na ikonu koše u sportoviště, které chcete smazat
2. Potvrďte smazání v dialogovém okně

## Správa rezervací

### Vytvoření nové rezervace

1. Přejděte na záložku "Rezervace"
2. Vyplňte formulář pro vytvoření rezervace:
   - Jméno a příjmení
   - Datum
   - Časový slot
   - Vyberte sportoviště z rozbalovacího seznamu
3. Klikněte na tlačítko "Vytvořit rezervaci"

### Úprava rezervace

1. V seznamu rezervací klikněte na ikonu tužky u rezervace, kterou chcete upravit
2. Upravte údaje ve formuláři
3. Klikněte na tlačítko "Aktualizovat rezervaci"

### Smazání rezervace

1. V seznamu rezervací klikněte na ikonu koše u rezervace, kterou chcete smazat
2. Potvrďte smazání v dialogovém okně

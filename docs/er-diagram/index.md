# ER Diagram

Tato stránka obsahuje Entity-Relationship diagram databáze aplikace Sport Česká Lípa - Rezervační systém sportovišť.

## Diagram

![ER Diagram](/images/er-diagram.png)

## Popis entit

### SPORTS (Sporty)

Tabulka obsahuje seznam sportů, které mohou být přiřazeny ke sportovištím.

- **id**: Unikátní identifikátor sportu
- **name**: Název sportu (např. Fotbal, Tenis, Basketbal)

### SPORT_LOCATIONS (Sportoviště)

Tabulka obsahuje seznam sportovišť, která mohou být rezervována.

- **id**: Unikátní identifikátor sportoviště
- **name**: Název sportoviště
- **location**: Adresa nebo umístění sportoviště
- **sport_id**: Cizí klíč odkazující na tabulku sports

### RESERVATIONS (Rezervace)

Tabulka obsahuje seznam rezervací sportovišť.

- **id**: Unikátní identifikátor rezervace
- **firstname**: Jméno osoby, která si rezervuje sportoviště
- **lastname**: Příjmení osoby, která si rezervuje sportoviště
- **date**: Datum rezervace
- **time_slot**: Časový slot rezervace (např. "14:00-15:00")
- **location_id**: Cizí klíč odkazující na tabulku sport_locations

## Vztahy mezi entitami

1. **SPORTS - SPORT_LOCATIONS**: Jeden sport může mít mnoho sportovišť (vztah 1:N)
   - Například sport "Fotbal" může mít sportoviště "Městský stadion", "Školní hřiště" atd.

2. **SPORT_LOCATIONS - RESERVATIONS**: Jedno sportoviště může mít mnoho rezervací (vztah 1:N)
   - Například sportoviště "Městský stadion" může mít rezervace na různé dny a časy.




# API Dokumentace

Tato stránka obsahuje dokumentaci k REST API, které poskytuje aplikace Sport Česká Lípa - Rezervační systém sportovišť.

## Základní informace

- Základní URL: `http://localhost:3000/api`
- Formát odpovědí: JSON
- Autentizace: Není vyžadována

## Sporty

### Seznam všech sportů

```
GET /sports
```

#### Odpověď

```json
[
  {
    "id": 1,
    "name": "Fotbal"
  },
  {
    "id": 2,
    "name": "Tenis"
  },
  ...
]
```

### Detail sportu

```
GET /sports/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID sportu |

#### Odpověď

```json
{
  "id": 1,
  "name": "Fotbal"
}
```

## Sportoviště

### Seznam všech sportovišť

```
GET /locations
```

#### Odpověď

```json
[
  {
    "id": 1,
    "name": "Městský stadion u Ploučnice - UMT",
    "location": "Stadion u Ploučnice",
    "sport_id": 1,
    "sport_name": "Fotbal"
  },
  ...
]
```

### Detail sportoviště

```
GET /locations/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID sportoviště |

#### Odpověď

```json
{
  "id": 1,
  "name": "Městský stadion u Ploučnice - UMT",
  "location": "Stadion u Ploučnice",
  "sport_id": 1,
  "sport_name": "Fotbal"
}
```

### Vytvoření sportoviště

```
POST /locations
```

#### Tělo požadavku

```json
{
  "name": "Nové sportoviště",
  "location": "Adresa sportoviště",
  "sport_id": 1
}
```

#### Odpověď

```json
{
  "id": 6
}
```

### Aktualizace sportoviště

```
PUT /locations/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID sportoviště |

#### Tělo požadavku

```json
{
  "name": "Aktualizované sportoviště",
  "location": "Nová adresa",
  "sport_id": 2
}
```

#### Odpověď

```json
{
  "changes": 1
}
```

### Smazání sportoviště

```
DELETE /locations/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID sportoviště |

#### Odpověď

```json
{
  "deleted": 1
}
```

## Rezervace

### Seznam všech rezervací

```
GET /reservations
```

#### Odpověď

```json
[
  {
    "id": 1,
    "firstname": "Jan",
    "lastname": "Novák",
    "date": "2023-06-15",
    "time_slot": "14:00-15:00",
    "location_id": 1,
    "location_name": "Městský stadion u Ploučnice - UMT"
  },
  ...
]
```

### Detail rezervace

```
GET /reservations/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID rezervace |

#### Odpověď

```json
{
  "id": 1,
  "firstname": "Jan",
  "lastname": "Novák",
  "date": "2023-06-15",
  "time_slot": "14:00-15:00",
  "location_id": 1,
  "location_name": "Městský stadion u Ploučnice - UMT"
}
```

### Vytvoření rezervace

```
POST /reservations
```

#### Tělo požadavku

```json
{
  "firstname": "Petr",
  "lastname": "Svoboda",
  "date": "2023-06-20",
  "time_slot": "16:00-17:00",
  "location_id": 2
}
```

#### Odpověď

```json
{
  "id": 4
}
```

### Aktualizace rezervace

```
PUT /reservations/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID rezervace |

#### Tělo požadavku

```json
{
  "firstname": "Petr",
  "lastname": "Svoboda",
  "date": "2023-06-21",
  "time_slot": "17:00-18:00",
  "location_id": 3
}
```

#### Odpověď

```json
{
  "changes": 1
}
```

### Smazání rezervace

```
DELETE /reservations/:id
```

#### Parametry

| Parametr | Typ | Popis |
|----------|-----|-------|
| id | number | ID rezervace |

#### Odpověď

```json
{
  "deleted": 1
}
```
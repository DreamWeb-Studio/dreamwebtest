# DreamWeb Studio Astro Preview

To jest bezpieczna wersja migracyjna Astro przygotowana obok obecnej aplikacji Vite/React.

Obecna wersja produkcyjna w katalogu nadrzędnym nie została usunięta ani przebudowana.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Domyślny adres:

```text
http://localhost:4321/
```

## Build

```bash
npm run build
npm run preview
```

## Zakres migracji

Statyczne strony Astro:

- `/`
- `/uslugi`
- `/uslugi/strony-internetowe`
- `/uslugi/oferty-pdf`
- `/uslugi/start-online`
- `/cennik`
- `/konfigurator`
- `/realizacje`
- `/faq`
- `/kontakt`
- `/dlaczego-ja`
- `/jak-pracuje`

Interakcje takie jak FAQ, zakładki cennika, menu mobilne, powrót na górę i konfigurator działają przez lekki JavaScript w Astro, bez React Routera.

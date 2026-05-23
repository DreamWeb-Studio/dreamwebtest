export const pricingTabs = [
  { id: 'strony', label: 'Strony internetowe' },
  { id: 'pdf', label: 'Oferty PDF' },
  { id: 'internet', label: 'Wprowadzenie do internetu' },
  { id: 'opieka', label: 'Opieka' },
];

const websitePackages = [
  {
    title: 'START',
    price: 'od 999 zł netto',
    forWhom: 'Dla firm, które chcą szybko wystartować z prostą, profesjonalną stroną.',
    cta: 'Zapytaj o START',
    included: ['strona one-page', 'indywidualny projekt graficzny', 'wersja mobilna', 'sekcja usług / oferta', 'formularz kontaktowy', 'podstawowe SEO', 'hosting w cenie', 'wdrożenie online', '1 miesiąc wsparcia po starcie'],
    missing: [],
  },
  {
    title: 'STANDARD',
    price: 'od 1499 zł netto',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla lokalnych firm i usługodawców, którzy potrzebują kilku podstron i mocniejszej prezentacji oferty.',
    cta: 'Zapytaj o STANDARD',
    intro: 'Wszystko ze START oraz dodatkowo:',
    included: ['do 5 podstron', 'realizacje / portfolio', 'FAQ', '3 miesiące wsparcia po starcie'],
    missing: [],
  },
  {
    title: 'PREMIUM',
    price: 'od 1999 zł netto',
    forWhom: 'Dla firm, które chcą lepiej zaprezentować ofertę, zaufanie i proces współpracy.',
    cta: 'Zapytaj o PREMIUM',
    intro: 'Wszystko ze STANDARD oraz dodatkowo:',
    included: ['5-10 podstron', 'rozbudowana oferta', 'opinie klientów', 'cennik / pakiety', 'animacje i efekty', 'podstawowa analityka', '6 miesięcy wsparcia po starcie'],
    missing: [],
  },
  {
    title: 'INDYWIDUALNY',
    price: 'od 2499 zł netto',
    forWhom: 'Dla większych stron, niestandardowych układów albo projektów wymagających szerszego zakresu.',
    cta: 'Zapytaj o projekt',
    intro: 'Wszystko z PREMIUM oraz dodatkowo:',
    included: ['10+ podstron albo rozbudowana struktura', 'blog / aktualności', 'możliwość dodania oferty PDF', 'niestandardowe sekcje i funkcje', '12 miesięcy wsparcia po starcie'],
    missing: [],
  },
];

const pdfPackages = [
  {
    title: 'PDF START',
    price: 'od 499 zł netto',
    forWhom: 'Dla prostych ofert i wycen, które mają wyglądać lepiej niż zwykły dokument tekstowy.',
    cta: 'Zapytaj o PDF START',
    included: ['do 3 stron PDF', 'okładka', 'podstawowy układ oferty', 'dane kontaktowe', 'CTA końcowe', 'eksport do PDF', '1 tura poprawek'],
    missing: ['rozbudowane grafiki', 'wiele wariantów oferty', 'katalog usług', 'zaawansowane wizualizacje'],
  },
  {
    title: 'PDF STANDARD',
    price: 'od 799 zł netto',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które regularnie wysyłają oferty i chcą prezentować się bardziej profesjonalnie.',
    cta: 'Zapytaj o PDF STANDARD',
    included: ['do 6 stron PDF', 'okładka', 'opis firmy', 'zakres oferty', 'cennik / wycena', 'warianty lub pakiety', 'zdjęcia / wizualizacje', 'warunki współpracy', 'dane kontaktowe', 'CTA końcowe', '2 tury poprawek'],
    missing: ['bardzo rozbudowany katalog', 'wiele wersji językowych', 'skomplikowane infografiki'],
  },
  {
    title: 'PDF PREMIUM',
    price: 'od 1199 zł netto',
    forWhom: 'Dla ofert, które mają mocniej sprzedawać, budować zaufanie i prowadzić klienta przez decyzję.',
    cta: 'Zapytaj o PDF PREMIUM',
    included: ['do 10 stron PDF', 'okładka premium', 'opis firmy', 'struktura sprzedażowa dokumentu', 'zakres oferty', 'pakiety / warianty', 'cennik / wycena', 'harmonogram prac', 'warunki współpracy', 'zdjęcia / wizualizacje', 'realizacje / przykłady', 'FAQ w PDF', 'dane kontaktowe', 'mocne CTA końcowe', '3 tury poprawek'],
    missing: ['bardzo duży katalog produktowy', 'sesja zdjęciowa', 'zaawansowana identyfikacja wizualna od zera'],
  },
  {
    title: 'PDF INDYWIDUALNY',
    price: 'od 1499 zł netto',
    forWhom: 'Dla katalogów, prezentacji firmowych, rozbudowanych ofert i dokumentów sprzedażowych.',
    cta: 'Zapytaj o PDF indywidualny',
    included: ['10+ stron PDF', 'indywidualna struktura dokumentu', 'rozbudowany projekt graficzny', 'katalog usług / produktów', 'wiele sekcji sprzedażowych', 'infografiki / wyróżnienia', 'przygotowanie dokumentu do wysyłki', 'możliwość przygotowania kilku wariantów', '3+ tury poprawek'],
    missing: [],
  },
];

const onlinePackages = [
  {
    title: 'START ONLINE',
    price: 'od 399 zł netto',
    forWhom: 'Dla firm, które potrzebują podstawowej pomocy z wejściem do internetu.',
    cta: 'Zapytaj o START ONLINE',
    included: ['konsultacja startowa', 'pomoc w wyborze domeny', 'podstawowe ustawienia domeny', 'podstawowe ustawienia hostingu lub Vercel', 'wskazówki, co przygotować do strony', 'krótkie podsumowanie działań'],
    missing: ['stworzenie pełnej strony', 'wizytówka Google', 'e-mail firmowy', 'social media'],
  },
  {
    title: 'ONLINE STANDARD',
    price: 'od 699 zł netto',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które chcą mieć uporządkowane podstawy obecności online.',
    cta: 'Zapytaj o ONLINE STANDARD',
    included: ['konsultacja startowa', 'domena i hosting / Vercel', 'podstawowe podpięcie strony', 'konfiguracja formularza kontaktowego, jeśli jest strona', 'pomoc z wizytówką Google', 'podstawowe SEO techniczne', 'linki do WhatsApp / telefon', 'podstawowe wskazówki po wdrożeniu'],
    missing: ['pełny projekt strony', 'prowadzenie social media', 'zaawansowane pozycjonowanie'],
  },
  {
    title: 'ONLINE PREMIUM',
    price: 'od 999 zł netto',
    forWhom: 'Dla firm, które chcą wejść online bardziej kompleksowo i mieć wszystko uporządkowane od początku.',
    cta: 'Zapytaj o ONLINE PREMIUM',
    included: ['konsultacja startowa', 'domena i hosting / Vercel', 'konfiguracja podstaw technicznych', 'wizytówka Google', 'e-mail firmowy', 'podstawowe SEO', 'linki kontaktowe', 'analityka', 'podstawowe uporządkowanie social media', 'instrukcja dalszego działania', 'wsparcie po wdrożeniu'],
    missing: ['pełna obsługa marketingowa', 'regularne prowadzenie profili', 'kampanie reklamowe'],
  },
  {
    title: 'ONLINE INDYWIDUALNY',
    price: 'od 1499 zł netto',
    forWhom: 'Dla firm, które potrzebują szerszej pomocy z wejściem do internetu, konfiguracją narzędzi i uporządkowaniem obecności online.',
    cta: 'Zapytaj o zakres indywidualny',
    included: ['indywidualny zakres działań', 'domena / hosting / Vercel', 'e-mail firmowy', 'wizytówka Google', 'social media start', 'podstawy analityki', 'podstawowe SEO', 'konsultacja i plan dalszych działań', 'możliwość połączenia ze stroną lub PDF'],
    missing: [],
  },
];

const subscriptionMinimum = 'minimalny okres 12 miesięcy';

const subscriptionPackages = [
  {
    title: 'START',
    price: '99 zł / mies.',
    forWhom: 'Niższy koszt startowy i prosta strona z utrzymaniem.',
    cta: 'Zapytaj o START',
    included: ['prosta strona one-page', 'hosting i utrzymanie w cenie', 'formularz kontaktowy', 'podstawowe SEO', '1 drobna zmiana miesięcznie', subscriptionMinimum],
    missing: [],
  },
  {
    title: 'STANDARD',
    price: '199 zł / mies.',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które chcą mieć kilka podstron i stałe wsparcie.',
    cta: 'Zapytaj o STANDARD',
    intro: 'Wszystko ze START oraz dodatkowo:',
    included: ['strona do 5 podstron', '3 drobne zmiany miesięcznie', 'wsparcie techniczne', 'rozbudowana sekcja oferty', 'realizacje / portfolio'],
    missing: [],
  },
  {
    title: 'PREMIUM',
    price: '299–499 zł / mies.',
    forWhom: 'Dla większych stron i firm, które potrzebują częstszych zmian.',
    cta: 'Zapytaj o PREMIUM',
    intro: 'Wszystko ze STANDARD oraz dodatkowo:',
    included: ['większa strona lub więcej podstron', 'regularne aktualizacje', 'podstawowa analityka', 'optymalizacja treści i szybkości', 'więcej zmian miesięcznie', 'indywidualny zakres wsparcia'],
    missing: [],
  },
];

const carePackages = [
  {
    title: 'OPIEKA START',
    price: 'od 99 zł / mies.',
    forWhom: 'Dla strony, która wymaga tylko drobnych aktualizacji od czasu do czasu.',
    cta: 'Zapytaj o opiekę',
    included: ['drobne poprawki tekstów', 'aktualizacja danych kontaktowych', 'kontrola działania strony', 'wsparcie mailowe'],
    missing: [],
  },
  {
    title: 'OPIEKA STANDARD',
    price: 'od 199 zł / mies.',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które regularnie zmieniają treści, zdjęcia albo sekcje na stronie.',
    cta: 'Zapytaj o opiekę',
    included: ['kilka drobnych zmian miesięcznie', 'aktualizacja zdjęć/sekcji', 'kontrola formularza', 'podstawowe wsparcie techniczne', 'sugestie usprawnień'],
    missing: [],
  },
  {
    title: 'OPIEKA PREMIUM',
    price: 'od 399 zł / mies.',
    forWhom: 'Dla stron, które mają się rozwijać i wymagać częstszych zmian.',
    cta: 'Zapytaj o opiekę',
    included: ['regularne aktualizacje', 'rozbudowa sekcji', 'analiza zachowań użytkowników', 'optymalizacja treści', 'priorytetowe wsparcie'],
    missing: [],
  },
];

export const pricingContent = {
  strony: {
    title: 'Cennik stron internetowych',
    description: 'Dla firm, które chcą profesjonalnie pokazać ofertę, wzbudzać zaufanie i zdobywać zapytania online. Możesz wybrać realizację jednorazową albo stronę w abonamencie.',
    note: 'Ceny orientacyjne netto. Finalna wycena zależy od liczby podstron, materiałów, funkcji i terminu.',
    groups: [
      {
        title: 'Pakiety jednorazowe',
        text: 'Płacisz raz za przygotowanie strony, a zakres ustalamy przed startem projektu.',
        packages: websitePackages,
        notes: [
          'Hosting jest w cenie każdego pakietu. Domena jest płatna osobno — zazwyczaj kosztuje około 50 zł rocznie, w zależności od wybranej końcówki, np. .pl, .com lub innej.',
          'Każdy pakiet można rozszerzyć o dodatkowe podstrony, ofertę PDF, blog, bardziej rozbudowane formularze lub indywidualne funkcje.',
        ],
      },
      {
        title: 'Strona w abonamencie',
        text: 'Niższy koszt startowy, utrzymanie strony i drobne zmiany w miesięcznej opłacie.',
        packages: subscriptionPackages,
        notes: [
          'Hosting i utrzymanie są w cenie każdego abonamentu. Domena jest płatna osobno — zazwyczaj kosztuje około 50 zł rocznie, w zależności od wybranej końcówki, np. .pl, .com lub innej.',
          'Każdy abonament można rozszerzyć o dodatkowe podstrony, ofertę PDF, blog, bardziej rozbudowane formularze lub indywidualne funkcje.',
        ],
      },
    ],
  },
  pdf: {
    title: 'Cennik ofert PDF',
    description: 'Dla firm, które wysyłają wyceny, oferty lub katalogi i chcą, żeby dokument wyglądał profesjonalnie oraz pomagał w sprzedaży.',
    note: 'Ceny orientacyjne netto. Finalna cena zależy od liczby stron, materiałów, grafik, zdjęć i poziomu dopracowania dokumentu.',
    packages: pdfPackages,
  },
  internet: {
    title: 'Cennik wprowadzenia do internetu',
    description: 'Dla firm, które chcą zacząć działać online, ale nie chcą samodzielnie walczyć z domeną, hostingiem, wizytówką Google i podstawami technicznymi.',
    note: 'Ceny orientacyjne netto. Finalna wycena zależy od liczby usług, kont, konfiguracji i zakresu pomocy.',
    packages: onlinePackages,
  },
  opieka: {
    title: 'Opieka i utrzymanie po wdrożeniu',
    description: 'Dla firm, które mają już stronę i chcą spokojnie zlecać drobne zmiany, kontrolę działania oraz rozwój treści.',
    note: 'Opieka jest opcjonalna i dobierana do tego, jak często chcesz zmieniać stronę.',
    packages: carePackages,
  },
};

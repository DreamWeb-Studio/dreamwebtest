export const pricingTabs = [
  { id: 'strony', label: 'Strony internetowe' },
  { id: 'pdf', label: 'Oferty PDF' },
  { id: 'internet', label: 'Start online' },
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
    price: 'od 299 zł netto',
    forWhom: 'Dla firm, które potrzebują prostej, estetycznej oferty PDF do wysyłki klientom.',
    cta: 'Zapytaj o PDF START',
    included: ['projekt oferty PDF do 2 stron', 'uporządkowany układ treści', 'okładka lub pierwsza strona', 'podstawowe wyróżnienie oferty', 'CTA końcowe', 'plik PDF gotowy do wysyłki'],
    missing: [],
  },
  {
    title: 'PDF STANDARD',
    price: 'od 499 zł netto',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które chcą lepiej zaprezentować ofertę, pakiety albo kilka usług.',
    cta: 'Zapytaj o PDF STANDARD',
    intro: 'Wszystko ze START oraz dodatkowo:',
    included: ['PDF do 5 stron', 'sekcja o firmie', 'prezentacja usług lub pakietów', 'lepsze wyróżnienie korzyści', 'dopasowanie do identyfikacji marki'],
    missing: [],
  },
  {
    title: 'PDF PREMIUM',
    price: 'od 799 zł netto',
    forWhom: 'Dla firm, które potrzebują bardziej dopracowanego materiału sprzedażowego.',
    cta: 'Zapytaj o PDF PREMIUM',
    intro: 'Wszystko ze STANDARD oraz dodatkowo:',
    included: ['PDF do 10 stron', 'bardziej rozbudowany układ oferty', 'dodatkowe sekcje sprzedażowe', 'ikony / proste elementy graficzne', 'wersja przygotowana pod druk lub wysyłkę online'],
    missing: [],
  },
  {
    title: 'PDF INDYWIDUALNY',
    price: 'od 1199 zł netto',
    forWhom: 'Dla katalogów, rozbudowanych ofert i materiałów wymagających indywidualnego podejścia.',
    cta: 'Zapytaj o PDF indywidualny',
    intro: 'Wszystko z PREMIUM oraz dodatkowo:',
    included: ['10+ stron lub katalog ofertowy', 'indywidualna struktura dokumentu', 'bardziej rozbudowana oprawa graficzna', 'dodatkowe warianty oferty', 'wycena zależna od zakresu'],
    missing: [],
  },
];

const onlinePackages = [
  {
    title: 'START',
    price: 'od 199 zł netto',
    forWhom: 'Dla firm, które chcą zrobić pierwszy krok i uporządkować podstawową obecność online.',
    cta: 'Zapytaj o START',
    included: ['podstawowa analiza obecności firmy w internecie', 'uporządkowanie informacji kontaktowych', 'pomoc w przygotowaniu wizytówki Google', 'podstawowe wskazówki do profili społecznościowych', 'lista najważniejszych rzeczy do poprawy', 'jasny plan dalszych działań'],
    missing: [],
  },
  {
    title: 'STANDARD',
    price: 'od 499 zł netto',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które chcą lepiej wyglądać online i mieć uporządkowane najważniejsze kanały.',
    cta: 'Zapytaj o STANDARD',
    intro: 'Wszystko ze START oraz dodatkowo:',
    included: ['konfiguracja lub uporządkowanie wizytówki Google', 'przygotowanie podstawowych opisów firmy', 'pomoc przy Facebooku lub Instagramie', 'uporządkowanie linków, kontaktu i podstawowych informacji', 'prosta grafika profilowa lub wskazówki do identyfikacji'],
    missing: [],
  },
  {
    title: 'PREMIUM',
    price: 'od 799 zł netto',
    forWhom: 'Dla firm, które chcą wystartować online z bardziej kompletnym zestawem materiałów.',
    cta: 'Zapytaj o PREMIUM',
    intro: 'Wszystko ze STANDARD oraz dodatkowo:',
    included: ['prosta strona startowa lub landing page', 'przygotowanie podstawowej struktury oferty online', 'formularz kontaktowy lub prosta ścieżka kontaktu', 'dopasowanie komunikacji do klienta docelowego', 'wsparcie przy pierwszych publikacjach lub treściach'],
    missing: [],
  },
  {
    title: 'INDYWIDUALNY',
    price: 'od 1299 zł netto',
    forWhom: 'Dla firm, które potrzebują szerszego wsparcia przy wejściu do internetu.',
    cta: 'Zapytaj o zakres indywidualny',
    intro: 'Wszystko z PREMIUM oraz dodatkowo:',
    included: ['indywidualny plan obecności online', 'więcej kanałów lub profili do uporządkowania', 'dodatkowe materiały graficzne lub tekstowe', 'rozbudowana strona startowa albo kilka wariantów komunikacji', 'zakres dopasowany do firmy'],
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
    included: ['drobne poprawki tekstów', 'aktualizacja danych kontaktowych', 'pilnowanie, żeby strona działała poprawnie', 'kontakt mailowy'],
    missing: [],
  },
  {
    title: 'OPIEKA STANDARD',
    price: 'od 199 zł / mies.',
    badge: 'Najczęściej wybierany',
    featured: true,
    forWhom: 'Dla firm, które regularnie zmieniają treści, zdjęcia albo sekcje na stronie.',
    cta: 'Zapytaj o opiekę',
    intro: 'Wszystko z OPIEKI START oraz dodatkowo:',
    included: ['kilka drobnych zmian miesięcznie', 'aktualizacja zdjęć lub sekcji', 'sprawdzanie formularza kontaktowego', 'sugestie prostych usprawnień'],
    missing: [],
  },
  {
    title: 'OPIEKA PREMIUM',
    price: 'od 399 zł / mies.',
    forWhom: 'Dla stron, które mają się rozwijać i wymagać częstszych zmian.',
    cta: 'Zapytaj o opiekę',
    intro: 'Wszystko z OPIEKI STANDARD oraz dodatkowo:',
    included: ['częstsze aktualizacje treści', 'rozbudowa wybranych sekcji', 'prosta analiza zachowań użytkowników', 'usprawnianie treści i ścieżki do kontaktu', 'szybsza reakcja na zgłoszenia'],
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
    notes: [
      'Każdy pakiet PDF można rozszerzyć o dodatkowe strony, wersję do druku, dodatkowe warianty oferty, infografiki lub indywidualne elementy graficzne.',
    ],
  },
  internet: {
    title: 'Cennik Start online',
    description: 'Dla firm, które chcą zacząć wyglądać profesjonalnie w internecie: uporządkować wizytówkę Google, social media, kontakt, linki i pierwsze materiały online.',
    note: 'Ceny orientacyjne netto. Finalna wycena zależy od liczby profili, materiałów, opisów i zakresu wsparcia.',
    packages: onlinePackages,
    notes: [
      'Start online można rozszerzyć o dodatkowe materiały, kolejne profile społecznościowe, ofertę PDF, prostą stronę internetową, grafiki lub indywidualne wsparcie przy wejściu firmy do internetu.',
      'Usługa jest przeznaczona dla firm, które chcą zacząć działać online bez technicznego chaosu. Wszystkie szczegóły ustalamy prostym językiem, krok po kroku.',
    ],
  },
  opieka: {
    title: 'Opieka i utrzymanie po wdrożeniu',
    description: 'Dla firm, które mają już stronę i chcą spokojnie zlecać drobne zmiany, kontrolę działania oraz rozwój treści.',
    note: 'Opieka jest opcjonalna i dobierana do tego, jak często chcesz zmieniać stronę.',
    packages: carePackages,
    notes: [
      'Opieka nad stroną obejmuje bieżące wsparcie, drobne poprawki i pilnowanie, żeby strona działała poprawnie. Zakres można rozszerzyć indywidualnie, jeśli strona wymaga częstszych zmian lub dodatkowych prac.',
    ],
  },
};

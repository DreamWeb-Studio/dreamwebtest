export const contactLinks = {
  email: 'kontakt@dreamwebstudio.pl',
  phone: '+48 661 074 809',
  phoneRaw: '+48661074809',
  whatsapp: 'https://wa.me/48661074809',
  facebook: 'https://www.facebook.com/profile.php?id=61590425240903',
  facebookLabel: 'DreamWeb Studio',
  instagram: 'https://www.instagram.com/dreamwebstudio_/',
  instagramHandle: '@dreamwebstudio_',
  linkedin: 'https://www.linkedin.com/company/dreamwebstudio',
};

export const contactMethods = [
  {
    id: 'facebook',
    label: 'Facebook',
    description: contactLinks.facebookLabel,
    detail: 'profil firmowy i aktualności',
    href: contactLinks.facebook,
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    description: contactLinks.instagramHandle,
    detail: 'realizacje, nowości i szybki kontakt',
    href: contactLinks.instagram,
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: contactLinks.phone,
    detail: 'szybka wiadomość',
    href: contactLinks.whatsapp,
    external: true,
  },
  {
    id: 'phone',
    label: 'Telefon',
    description: contactLinks.phone,
    detail: 'jeśli wolisz omówić temat bez pisania',
    href: `tel:${contactLinks.phoneRaw}`,
    external: false,
  },
];

export const services = [
  {
    title: 'Strony internetowe',
    href: '/uslugi/strony-internetowe',
    description:
      'Nowoczesna strona firmowa, która jasno pokazuje ofertę i prowadzi klienta do kontaktu.',
    points: ['Przejrzysta oferta', 'Wersja mobilna', 'Formularz kontaktowy', 'Podstawowe SEO', 'Wdrożenie online'],
  },
  {
    title: 'Landing page',
    href: '/uslugi/landing-page',
    description:
      'Krótka strona pod jedną usługę, kampanię albo konkretny cel sprzedażowy.',
    points: ['Jedna konkretna oferta', 'Mocne CTA', 'Układ pod kampanię', 'Wersja mobilna'],
  },
  {
    title: 'Oferta PDF',
    href: '/uslugi/oferty-pdf',
    description:
      'Estetyczny dokument sprzedażowy, który porządkuje ofertę i wygląda profesjonalnie po wysłaniu klientowi.',
    points: ['Estetyczny układ', 'Czytelna struktura', 'Gotowy PDF do wysyłki', 'Spójność z marką'],
  },
  {
    title: 'Start online',
    href: '/uslugi/wprowadzenie-do-internetu',
    description:
      'Pomoc przy stronie, domenie, hostingu, formularzu i podstawach obecności firmy w internecie.',
    points: ['Domena i hosting', 'Wizytówka Google', 'Podstawy SEO', 'Wsparcie po starcie'],
  },
];

export const processSteps = [
  ['Wstępny kontakt', 'Rozmawiamy o firmie, celu strony i tym, co ma się wydarzyć po wejściu klienta na stronę.'],
  ['Kierunek wizualny', 'Przygotowuję układ i klimat projektu, żeby od razu było widać, w którą stronę idziemy.'],
  ['Zakres i wycena', 'Ustalamy, co dokładnie robimy, ile to kosztuje i co jest w cenie. Bez niespodzianek po drodze.'],
  ['Realizacja projektu', 'Projektuję, wdrażam i pokazuję postępy. Ty widzisz, co się dzieje, zamiast zgadywać.'],
  ['Publikacja i start', 'Po akceptacji podpinam stronę, przekazuję gotowy projekt i pomagam z pierwszymi krokami online.'],
];

export const advantages = [
  ['Skupienie na zapytaniach', 'Nie robię strony do podziwiania. Układ, treści i CTA mają pomagać klientowi szybko zrozumieć ofertę i napisać.'],
  ['Szybki, prosty kontakt', 'Rozmawiasz bezpośrednio ze mną. Bez działów, ticketów i czekania tydzień na odpowiedź.'],
  ['Projekt bez szablonu', 'Każda strona firmowa powstaje pod konkretną branżę, ofertę i sposób, w jaki klient ma dojść do kontaktu.'],
  ['Pomoc po publikacji', 'Nie zostajesz sam z domeną, hostingiem i drobnymi poprawkami. Pomagam przejść przez pierwsze kroki po starcie.'],
];

export const projects = [
  {
    type: 'website',
    category: 'STRONA INTERNETOWA',
    title: 'Aluraf-Tarasy',
    description:
      'Strona internetowa dla lokalnej firmy, która porządkuje ofertę, pokazuje realizacje i ułatwia szybki kontakt z klientem.',
    goal: 'Pokazać ofertę firmy w profesjonalny sposób i ułatwić klientom szybki kontakt.',
    scope: ['Strona internetowa', 'Układ responsywny', 'Prezentacja oferty', 'CTA do kontaktu', 'Wdrożenie online'],
    benefits: ['czytelna prezentacja usług', 'widok dopasowany do mobile', 'szybki kontakt z klientem', 'lepsze pierwsze wrażenie firmy'],
    result: 'Strona lepiej prezentuje firmę, porządkuje ofertę i daje klientowi szybki dostęp do najważniejszych informacji.',
    desktop: '/images/projects/aluraf-tarasy-strona-internetowa-hero.jpg',
    mobile: '/images/projects/aluraf-tarasy-widok-mobile.jpg',
    externalUrl: 'https://www.aluraf-tarasy.pl/',
    ctaLabel: 'Zobacz stronę',
    alt: 'Mockup strony internetowej Aluraf-Tarasy',
  },
  {
    type: 'pdf',
    category: 'DOKUMENT PDF',
    title: 'Strefa Komfortu',
    description:
      'Oferta PDF dla firmy przygotowana tak, żeby wycena była czytelna, estetyczna i gotowa do wysyłki po rozmowie z klientem.',
    goal: 'Stworzyć dokument, który wygląda lepiej niż zwykła wycena i pomaga klientowi szybciej zrozumieć ofertę.',
    scope: ['Projekt PDF', 'Struktura oferty', 'Prezentacja parametrów', 'Estetyczny układ', 'Gotowy materiał do wysyłki'],
    benefits: ['profesjonalna prezentacja oferty', 'czytelny układ dokumentu', 'lepsze prowadzenie klienta przez wycenę', 'gotowy materiał do wysyłki'],
    result: 'Oferta wygląda bardziej profesjonalnie i pomaga budować zaufanie już na etapie rozmowy z klientem.',
    pages: [
      '/images/projects/strefa-komfortu-dokument-pdf-strona-1.jpg',
      '/images/projects/strefa-komfortu-dokument-pdf-strona-2.jpg',
      '/images/projects/strefa-komfortu-dokument-pdf-strona-3.jpg',
    ],
    pdfUrl: '/files/strefa-komfortu-oferta.pdf',
    ctaLabel: 'Zobacz PDF',
    alt: 'Mockup dokumentu PDF Strefa Komfortu',
  },
];

export const faqCategories = [
  {
    id: 'general',
    label: 'Ogólne',
    items: [
      ['Czym dokładnie się zajmujesz?', 'Projektuję i wdrażam strony internetowe, landing page’e, oferty PDF oraz pomagam firmom uporządkować podstawy obecności w internecie.'],
      ['Dla jakich firm tworzysz strony?', 'Najczęściej pracuję z małymi firmami, lokalnymi usługodawcami i markami, które chcą wyglądać lepiej online oraz pozyskiwać zapytania.'],
      ['Czy pracujesz tylko lokalnie, czy zdalnie?', 'Pracuję zdalnie, więc lokalizacja nie ma większego znaczenia. Kontakt może odbywać się mailowo, telefonicznie, przez WhatsApp lub Instagram.'],
      ['Czy pierwsza rozmowa jest darmowa?', 'Tak. Pierwsza rozmowa i wstępna wycena są darmowe.'],
    ],
  },
  {
    id: 'pricing',
    label: 'Wycena i rozliczenia',
    items: [
      ['Ile kosztuje strona internetowa?', 'Każdy projekt wyceniam indywidualnie. Cena zależy od liczby sekcji, funkcji, materiałów, poziomu projektu graficznego i celu strony.'],
      ['Od czego zależy cena strony?', 'Największy wpływ mają zakres, liczba podstron, formularze, animacje, przygotowanie treści, SEO oraz dodatkowe materiały, na przykład oferta PDF.'],
      ['Czy muszę zapłacić całość z góry?', 'Najczęściej pracuję z zaliczką przed startem i płatnością końcową po akceptacji. Szczegóły ustalamy przed rozpoczęciem projektu.'],
      ['Czy domena i hosting są w cenie?', 'Domena i hosting zwykle są osobnym kosztem po stronie klienta. Mogę pomóc wybrać rozwiązanie i przejść przez konfigurację.'],
    ],
  },
  {
    id: 'process',
    label: 'Proces i terminy',
    items: [
      ['Ile trwa realizacja strony?', 'Prosta strona może powstać w kilka dni. Większe projekty wymagają więcej czasu. Dokładny termin ustalam po poznaniu zakresu.'],
      ['Jak wygląda współpraca krok po kroku?', 'Najpierw rozmawiamy o celu, potem przygotowuję kierunek wizualny, ustalamy zakres i cenę, a następnie wdrażam projekt.'],
      ['Co muszę przygotować przed startem?', 'Najlepiej przygotować opis oferty, dane kontaktowe, logo, zdjęcia i przykłady stron, które Ci się podobają. Jeśli czegoś brakuje, pomogę to uporządkować.'],
      ['Czy mogę zgłaszać poprawki?', 'Tak. Poprawki są naturalną częścią procesu. Zakres rund poprawek ustalamy wcześniej.'],
    ],
  },
  {
    id: 'tech',
    label: 'Technologia i SEO',
    items: [
      ['Czy strona będzie działać na telefonach?', 'Tak. Każda strona jest responsywna i dopasowana do telefonów, tabletów oraz komputerów.'],
      ['Czy strona będzie szybka?', 'Tak, dbam o lekki kod, zoptymalizowane obrazy i brak zbędnych dodatków. Szybkość ma znaczenie dla użytkownika i zapytań.'],
      ['Czy strona będzie przygotowana pod Google?', 'Tak. Wdrażam podstawowe SEO techniczne: strukturę nagłówków, meta tagi, alt texty, szybkość ładowania i logiczny układ treści.'],
      ['Czy mogę mieć formularz kontaktowy?', 'Tak. Formularz kontaktowy może być częścią strony. Później można podpiąć realną wysyłkę wiadomości.'],
    ],
  },
  {
    id: 'after',
    label: 'Po wdrożeniu',
    items: [
      ['Czy zapewniasz wsparcie po wdrożeniu?', 'Tak. Po publikacji mogę pomagać przy poprawkach, aktualizacjach i dalszym rozwoju strony.'],
      ['Czy mogę później zmieniać treści?', 'Tak. Możemy ustalić opiekę miesięczną albo przygotować rozwiązanie z panelem lub CMS.'],
      ['Co jeśli coś przestanie działać?', 'Możesz do mnie napisać. Sprawdzę problem i zaproponuję najlepsze rozwiązanie w zależności od przyczyny.'],
      ['Czy mogę później rozbudować stronę?', 'Tak. Stronę można później rozbudować o kolejne sekcje, podstrony, realizacje, formularze, blog lub dodatkowe materiały sprzedażowe.'],
    ],
  },
];

export const serviceDetails = {
  'strony-internetowe': {
    badge: 'STRONY WWW',
    title: 'Strony internetowe dla firm, które mają prowadzić do kontaktu',
    description: 'Tworzę strony firmowe, landing page’e i układy sprzedażowe, które jasno pokazują ofertę, działają na telefonach i są przygotowane pod podstawowe SEO.',
    sections: [
      ['Dla kogo jest ta usługa?', ['Lokalne firmy', 'Usługodawcy', 'Firmy budowlane i remontowe', 'Marki osobiste', 'Firmy, które chcą uporządkować ofertę online']],
      ['Co zawiera strona?', ['Projekt dopasowany do marki', 'Responsywny układ', 'Formularz kontaktowy', 'Podstawowe SEO', 'Wdrożenie online', 'Wsparcie po publikacji']],
      ['Korzyści dla klienta', ['Lepsze pierwsze wrażenie', 'Jasna prezentacja oferty', 'Szybka ścieżka do kontaktu', 'Strona gotowa do rozwoju']],
    ],
  },
  'landing-page': {
    badge: 'LANDING PAGE',
    title: 'Landing page pod jedną usługę, kampanię albo szybką decyzję',
    description: 'Tworzę landing page’e, które skupiają się na jednym celu: pokazaniu konkretnej oferty i zachęceniu klienta do wysłania zapytania.',
    sections: [
      ['Dla kogo jest landing page?', ['Dla jednej usługi lub produktu', 'Dla kampanii reklamowej', 'Dla firm, które chcą szybko sprawdzić zainteresowanie ofertą', 'Dla sezonowej promocji albo nowego kierunku sprzedaży']],
      ['Co może zawierać?', ['Mocny hero', 'Opis problemu i rozwiązania', 'Korzyści', 'Sekcję zaufania', 'FAQ', 'Formularz lub CTA do kontaktu']],
      ['Kiedy wybrać landing page?', ['Gdy nie potrzebujesz pełnej strony firmowej', 'Gdy chcesz prowadzić ruch z reklamy', 'Gdy zależy Ci na prostym i konkretnym komunikacie']],
    ],
  },
  'oferty-pdf': {
    badge: 'OFERTY PDF',
    title: 'Oferty PDF i wyceny, które wyglądają jak materiał sprzedażowy',
    description: 'Projektuję oferty, katalogi i dokumenty PDF, które prowadzą klienta przez propozycję i pomagają pokazać wartość usługi.',
    sections: [
      ['Dlaczego warto?', ['Dokument wygląda lepiej niż zwykły plik z Worda', 'Klient szybciej rozumie zakres', 'Oferta jest gotowa do wysyłki po rozmowie']],
      ['Co może zawierać PDF?', ['Okładkę', 'Opis firmy', 'Zakres oferty', 'Warianty i cennik', 'Warunki współpracy', 'CTA końcowe']],
      ['Dla jakich branż?', ['Usługi lokalne', 'Firmy remontowe', 'Budownictwo', 'E-commerce usługowy', 'Marki osobiste']],
    ],
  },
  'wprowadzenie-do-internetu': {
    badge: 'START ONLINE',
    title: 'Wprowadzenie firmy do internetu bez technicznego chaosu',
    description: 'Pomagam małym firmom zacząć online: domena, hosting, wizytówka Google, podstawy SEO, strona startowa i proste wskazówki po wdrożeniu.',
    sections: [
      ['Dla kogo?', ['Dla firm bez strony', 'Dla lokalnych usługodawców', 'Dla osób, które nie chcą samodzielnie walczyć z technikaliami']],
      ['Co obejmuje start?', ['Domena i hosting', 'Wizytówka Google', 'E-mail firmowy', 'Podstawowe SEO', 'Landing page lub strona startowa']],
      ['Co otrzymujesz?', ['Uporządkowany start online', 'Pomoc przy konfiguracji', 'Jasne wskazówki na dalszy rozwój']],
    ],
  },
};

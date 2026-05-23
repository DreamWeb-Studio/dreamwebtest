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
    description: 'Tworzę strony firmowe, które jasno pokazują ofertę, budują zaufanie i ułatwiają klientowi wykonanie kolejnego kroku — kontakt, zapytanie lub wycenę.',
    secondaryCta: 'Zobacz cennik',
    secondaryHref: '/cennik#strony',
    audience: [
      ['Lokalne firmy usługowe', 'Gdy strona ma szybko wyjaśnić ofertę i ułatwić kontakt.'],
      ['Firmy budowlane i remontowe', 'Gdy ważne są realizacje, zakres usług i konkretne zapytania.'],
      ['Specjaliści i małe marki', 'Gdy chcesz wyglądać profesjonalnie bez rozbudowanej agencji po drodze.'],
      ['Firmy porządkujące ofertę online', 'Gdy obecna komunikacja jest niejasna albo rozproszona.'],
    ],
    scope: ['struktura strony dopasowana do oferty', 'indywidualny projekt graficzny', 'wersja mobilna', 'formularz kontaktowy', 'podstawowe SEO', 'wdrożenie online', 'hosting w cenie', 'wsparcie po starcie'],
    process: [
      ['Cel i zakres', 'Ustalamy, co strona ma komunikować i jakie zapytania ma wspierać.'],
      ['Struktura strony', 'Układam sekcje, hierarchię informacji i ścieżkę do kontaktu.'],
      ['Projekt i wdrożenie', 'Przygotowuję wygląd, wdrażam stronę i dopasowuję ją do mobile.'],
      ['Poprawki i publikacja', 'Dopracowujemy szczegóły, publikuję stronę i sprawdzam podstawy działania.'],
    ],
    when: 'Wybierz stronę internetową, jeśli chcesz mieć solidną bazę online: miejsce, do którego możesz kierować klientów z Google, social mediów, wizytówki Google i reklam.',
    price: 'od 999 zł netto',
    priceHref: '/cennik#strony',
    faq: [
      ['Ile trwa wykonanie strony?', 'Prosta strona może powstać w kilka dni, a większy projekt zwykle wymaga więcej czasu. Termin ustalam po poznaniu zakresu.'],
      ['Czy muszę mieć gotowe teksty?', 'Nie. Możesz dostarczyć gotowe treści albo luźne informacje, które pomogę uporządkować.'],
      ['Czy strona będzie działać na telefonie?', 'Tak. Strona jest projektowana responsywnie, żeby dobrze wyglądała na telefonie, tablecie i komputerze.'],
    ],
    finalTitle: 'Chcesz stronę, która jasno pokazuje ofertę?',
    finalText: 'Przejdź przez konfigurator albo napisz, czego potrzebujesz. Pomogę dobrać zakres do Twojej firmy i budżetu.',
  },
  'landing-page': {
    badge: 'LANDING PAGE',
    title: 'Landing page pod jedną usługę, kampanię albo szybką decyzję',
    description: 'Landing page skupia uwagę klienta na jednej konkretnej ofercie. Sprawdza się przy reklamach, nowych usługach, promocjach i prostych procesach sprzedaży.',
    secondaryCta: 'Zobacz cennik',
    secondaryHref: '/cennik#strony',
    audience: [
      ['Jedna usługa lub produkt', 'Gdy chcesz wypromować konkretny temat bez pełnej strony firmowej.'],
      ['Kampania reklamowa', 'Gdy ruch z reklamy ma trafić na stronę z jednym jasnym CTA.'],
      ['Szybkie testowanie oferty', 'Gdy chcesz sprawdzić zainteresowanie nową usługą lub promocją.'],
      ['Prosty formularz zapytania', 'Gdy najważniejsze jest zebranie kontaktu od zainteresowanego klienta.'],
    ],
    scope: ['jedna strona sprzedażowa', 'mocny nagłówek i CTA', 'sekcja korzyści', 'sekcja z obiekcjami / FAQ', 'formularz kontaktowy', 'wersja mobilna', 'podstawowe SEO', 'wdrożenie online'],
    process: [
      ['Cel kampanii', 'Ustalamy, co użytkownik ma zrobić po wejściu na landing page.'],
      ['Argumenty i struktura', 'Porządkuję problem, korzyści, ofertę, obiekcje i CTA.'],
      ['Projekt i wdrożenie', 'Tworzę sprzedażowy układ strony i wdrażam go w lekkiej formie.'],
      ['Test i publikacja', 'Sprawdzamy widok mobile, formularz i gotowość do kierowania ruchu.'],
    ],
    when: 'Wybierz landing page, jeśli nie potrzebujesz pełnej strony firmowej, tylko chcesz promować jedną konkretną usługę albo kampanię.',
    price: 'od 999 zł netto',
    priceHref: '/cennik#strony',
    faq: [
      ['Czym landing page różni się od zwykłej strony?', 'Landing page skupia się na jednej ofercie i jednym celu, a strona firmowa szerzej prezentuje firmę, usługi i zaufanie.'],
      ['Czy landing nadaje się pod reklamy?', 'Tak. To jeden z najlepszych wariantów, gdy reklama ma prowadzić do konkretnej usługi, promocji lub formularza.'],
      ['Czy mogę później rozbudować go do pełnej strony?', 'Tak. Landing page może być pierwszym etapem, który później rozbudujemy o kolejne podstrony i sekcje.'],
    ],
    finalTitle: 'Masz jedną usługę, którą chcesz mocniej pokazać?',
    finalText: 'Opisz cel kampanii albo przejdź przez konfigurator. Pomogę ocenić, czy landing page będzie najlepszym wyborem.',
  },
  'oferty-pdf': {
    badge: 'OFERTY PDF',
    title: 'Oferty PDF i wyceny, które wyglądają jak materiał sprzedażowy',
    description: 'Projektuję oferty, katalogi i dokumenty PDF, które pomagają lepiej zaprezentować usługę, uporządkować informacje i zrobić profesjonalne wrażenie na kliencie.',
    secondaryCta: 'Zobacz cennik',
    secondaryHref: '/cennik#pdf',
    audience: [
      ['Firmy usługowe', 'Gdy po rozmowie wysyłasz klientowi zakres, warianty albo wycenę.'],
      ['Firmy remontowe i budowlane', 'Gdy oferta musi czytelnie pokazać etapy, materiały, parametry i zakres.'],
      ['E-commerce usługowy', 'Gdy sprzedajesz usługę, konfigurację lub pakiet, a nie prosty produkt z koszyka.'],
      ['Marki osobiste i B2B', 'Gdy dokument ma budować zaufanie przed decyzją klienta.'],
    ],
    scope: ['projekt okładki', 'uporządkowany układ treści', 'sekcja oferty lub pakietów', 'wizualne wyróżnienie korzyści', 'CTA końcowe', 'plik PDF gotowy do wysyłki', 'opcjonalnie wersja do druku'],
    process: [
      ['Materiały i cel', 'Sprawdzamy, co klient ma zrozumieć po otrzymaniu oferty.'],
      ['Struktura dokumentu', 'Układam kolejność informacji, sekcje i najważniejsze argumenty.'],
      ['Projekt PDF', 'Tworzę estetyczny dokument dopasowany do marki i sposobu sprzedaży.'],
      ['Poprawki i eksport', 'Dopracowujemy treść, a na końcu otrzymujesz plik gotowy do wysyłki.'],
    ],
    when: 'Wybierz ofertę PDF, jeśli często wysyłasz klientom wyceny, prezentacje usług albo materiały po rozmowie i chcesz wyglądać bardziej profesjonalnie.',
    price: 'od 499 zł netto',
    priceHref: '/cennik#pdf',
    faq: [
      ['Czy mogę dostarczyć własne teksty?', 'Tak. Możesz przesłać gotowe treści, notatki albo obecną ofertę, którą uporządkuję wizualnie.'],
      ['Czy PDF można później edytować?', 'Możemy ustalić wersję do dalszej edycji lub przygotować późniejsze aktualizacje jako osobny zakres.'],
      ['Czy oferta może pasować wizualnie do mojej strony?', 'Tak. PDF może być spójny z kolorami, stylem i komunikacją strony lub marki.'],
    ],
    finalTitle: 'Chcesz wysyłać ofertę, która wygląda profesjonalnie?',
    finalText: 'Prześlij obecny dokument albo krótko opisz, co ma zawierać PDF. Pomogę ułożyć go w czytelny materiał sprzedażowy.',
  },
  'wprowadzenie-do-internetu': {
    badge: 'START ONLINE',
    title: 'Wprowadzenie firmy do internetu bez technicznego chaosu',
    description: 'Pomagam małym firmom zacząć online: domena, hosting, wizytówka Google, podstawy SEO, strona startowa i proste wskazówki po wdrożeniu.',
    secondaryCta: 'Zobacz cennik',
    secondaryHref: '/cennik#internet',
    audience: [
      ['Firmy bez strony', 'Gdy chcesz przestać odkładać start online i potrzebujesz jasnego planu.'],
      ['Lokalni usługodawcy', 'Gdy klienci szukają Cię w Google, ale nie mają gdzie sprawdzić oferty.'],
      ['Osoby startujące z działalnością', 'Gdy trzeba uporządkować podstawy bez przepłacania za zbyt duży projekt.'],
      ['Firmy działające tylko przez Facebooka', 'Gdy chcesz mieć własne miejsce online, niezależne od social mediów.'],
    ],
    scope: ['pomoc przy domenie i hostingu', 'wizytówka Google', 'e-mail firmowy', 'podstawowe SEO', 'landing page lub prosta strona startowa', 'wskazówki do dalszego rozwoju'],
    process: [
      ['Audyt startu', 'Sprawdzamy, co już masz: domenę, konto Google, social media, materiały i ofertę.'],
      ['Plan podstaw', 'Ustalamy, co trzeba założyć, uporządkować albo podpiąć w pierwszej kolejności.'],
      ['Konfiguracja i strona', 'Pomagam przy technicznych podstawach oraz prostej stronie startowej lub landing page’u.'],
      ['Wskazówki po wdrożeniu', 'Dostajesz jasne informacje, co dalej rozwijać i jak dbać o obecność online.'],
    ],
    when: 'Wybierz Start online, jeśli chcesz po prostu zacząć działać w internecie i nie chcesz samodzielnie ogarniać technicznych tematów.',
    price: 'od 399 zł netto',
    priceHref: '/cennik#internet',
    faq: [
      ['Czy muszę mieć już domenę?', 'Nie. Mogę pomóc wybrać domenę i przejść przez podstawowe ustawienia.'],
      ['Czy pomagasz założyć wizytówkę Google?', 'Tak. W ramach startu online mogę pomóc uporządkować lub przygotować podstawy wizytówki Google.'],
      ['Czy później można rozbudować stronę?', 'Tak. Start online może być pierwszym etapem przed pełną stroną firmową lub landing page’em.'],
    ],
    finalTitle: 'Chcesz spokojnie wejść online?',
    finalText: 'Napisz, co już masz, a czego brakuje. Pomogę ustalić najprostszy sensowny zakres na start.',
  },
};

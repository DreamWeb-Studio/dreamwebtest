export const site = {
  name: "DreamWeb Studio",
  domain: "https://dreamwebstudio.pl",
  description: "Strony internetowe i oferty PDF dla małych firm, projektowane mobile-first.",
  logo: "/assets/logo-dreamweb-studio.png",
  favicon: "/favicon-dreamweb-studio.png",
  city: "Gniezno",
  area: "cała Polska"
};

export const contact = {
  phoneDisplay: "+48 661 074 809",
  phoneHref: "tel:+48661074809",
  whatsapp: "https://wa.me/48661074809",
  instagram: "https://www.instagram.com/dreamwebstudio_/",
  facebook: "https://www.facebook.com/people/DreamWeb-Studio/61590425240903/"
};

export const mainNav = [
  { label: "Oferta", href: "/uslugi/", hasDropdown: true },
  { label: "Realizacje", href: "/realizacje/" },
  { label: "Cennik", href: "/cennik/" },
  { label: "Jak pracuję", href: "/jak-pracuje/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/kontakt/" }
];

export const offerNav = [
  { label: "Strony internetowe", href: "/uslugi/strony-internetowe/" },
  { label: "Landing page", href: "/uslugi/landing-page/" },
  { label: "Oferty PDF", href: "/uslugi/oferty-pdf/" }
];

export const mobileNav = [
  ...mainNav.map(({ label, href }) => ({ label, href })),
  { label: "Baza wiedzy", href: "/baza-wiedzy/" },
  { label: "Instagram", href: contact.instagram },
  { label: "Facebook", href: contact.facebook },
  { label: "WhatsApp", href: contact.whatsapp },
  { label: "Zadzwoń", href: contact.phoneHref }
];

export const bottomNav = [
  { label: "Start", href: "/", icon: "home" },
  { label: "Oferta", href: "/uslugi/", icon: "grid" },
  { label: "Realizacje", href: "/realizacje/", icon: "case" },
  { label: "Wycena", href: "/konfigurator/", icon: "spark" }
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "DreamWeb Studio - strony internetowe dla małych firm",
    description:
      "Nowoczesne strony internetowe i oferty PDF dla małych firm. Mobile-first, czytelna oferta, szybki kontakt i wycena w konfiguratorze."
  },
  "/uslugi/": {
    title: "Usługi DreamWeb Studio - strony internetowe i oferty PDF",
    description:
      "Sprawdź usługi DreamWeb Studio: strony internetowe, landing page i oferty PDF dla małych firm, które chcą lepiej pokazać ofertę."
  },
  "/uslugi/strony-internetowe/": {
    title: "Strony internetowe dla małych firm - DreamWeb Studio",
    description:
      "Strony internetowe od 499 zł: mobile-first, czytelna oferta, formularz kontaktowy, podstawowe SEO i publikacja na domenie."
  },
  "/uslugi/landing-page/": {
    title: "Landing page dla jednej oferty lub kampanii - DreamWeb Studio",
    description:
      "Landing page dla usługi, kampanii albo konkretnej oferty. Strona skupiona na jednym celu, szybkim kontakcie i mobile-first."
  },
  "/uslugi/oferty-pdf/": {
    title: "Oferty PDF gotowe do wysyłki klientom - DreamWeb Studio",
    description:
      "Profesjonalne oferty PDF od 299 zł: uporządkowane treści, estetyczny projekt i plik gotowy do wysyłki po rozmowie z klientem."
  },
  "/uslugi/start-online/": {
    title: "Pomoc przy podstawowej obecności online - DreamWeb Studio",
    description:
      "Opcjonalna pomoc przy starcie online podczas budowy strony: dane kontaktowe, linki do social media i wskazówki do wizytówki Google."
  },
  "/cennik/": {
    title: "Cennik stron internetowych i ofert PDF - DreamWeb Studio",
    description:
      "Prosty cennik DreamWeb Studio: strona od 499 zł, abonament od 99 zł miesięcznie, oferta PDF od 299 zł. Wycena zależy od zakresu."
  },
  "/konfigurator/": {
    title: "Konfigurator wyceny projektu - DreamWeb Studio",
    description:
      "Wyceń stronę internetową, ofertę PDF albo oba materiały w kilka minut. Konfigurator jest bez zobowiązań i pomaga ustalić zakres."
  },
  "/realizacje/": {
    title: "Realizacje stron i materiałów - DreamWeb Studio",
    description:
      "Zobacz przykłady realizacji DreamWeb Studio: Barman Duszek, Aluraf-Tarasy i Strefa Komfortu. Case studies bez fikcyjnych opinii."
  },
  "/faq/": {
    title: "FAQ - pytania o strony, PDF i współpracę - DreamWeb Studio",
    description:
      "Odpowiedzi na najczęstsze pytania o ceny, proces, konfigurator, domenę, publikację, strony internetowe i oferty PDF."
  },
  "/kontakt/": {
    title: "Kontakt - DreamWeb Studio",
    description:
      "Napisz do DreamWeb Studio, przejdź do konfiguratora, zadzwoń albo skorzystaj z WhatsApp. Strony internetowe i oferty PDF dla małych firm."
  },
  "/strony-internetowe-gniezno/": {
    title: "Strony internetowe Gniezno - DreamWeb Studio",
    description:
      "Strony internetowe dla firm z Gniezna i okolic: mobile-first, czytelna oferta, podstawowe SEO, formularz i publikacja na domenie."
  },
  "/baza-wiedzy/": {
    title: "Baza wiedzy o stronach internetowych - DreamWeb Studio",
    description:
      "Praktyczna baza wiedzy dla małych firm: ile kosztuje strona, kiedy wybrać landing page i co powinna zawierać strona firmowa."
  },
  "/baza-wiedzy/ile-kosztuje-strona-internetowa/": {
    title: "Ile kosztuje strona internetowa? - DreamWeb Studio",
    description:
      "Wyjaśnienie kosztów strony internetowej: od 499 zł, abonament od 99 zł miesięcznie, PDF od 299 zł i elementy wpływające na cenę."
  },
  "/baza-wiedzy/strona-internetowa-czy-landing-page/": {
    title: "Strona internetowa czy landing page? - DreamWeb Studio",
    description:
      "Porównanie strony firmowej i landing page. Sprawdź, kiedy wybrać pełniejszą stronę, a kiedy prostą stronę pod jedną ofertę."
  },
  "/baza-wiedzy/co-powinna-zawierac-strona-firmowa/": {
    title: "Co powinna zawierać strona firmowa? - DreamWeb Studio",
    description:
      "Najważniejsze elementy dobrej strony firmowej: oferta, dowody zaufania, cennik, FAQ, kontakt i wygodna wersja mobile."
  },
  "/dlaczego-ja/": {
    title: "Dlaczego DreamWeb Studio? - strony bez chaosu",
    description:
      "Poznaj podejście DreamWeb Studio: porządkowanie oferty, projekt mobile-first, czytelne treści, podstawowe SEO i publikacja na domenie."
  },
  "/jak-pracuje/": {
    title: "Jak wygląda współpraca? - DreamWeb Studio",
    description:
      "Proces współpracy z DreamWeb Studio: konfigurator, doprecyzowanie zakresu, struktura, projekt, wdrożenie, publikacja i wsparcie."
  },
  "/polityka-prywatnosci/": {
    title: "Polityka prywatności - DreamWeb Studio",
    description:
      "Polityka prywatności DreamWeb Studio: informacje o formularzach, kontakcie, cookies, analityce i przetwarzaniu danych."
  }
};

export const sitemapEntries = [
  { path: "/", priority: "1.0" },
  { path: "/uslugi/", priority: "0.9" },
  { path: "/uslugi/strony-internetowe/", priority: "0.9" },
  { path: "/uslugi/oferty-pdf/", priority: "0.9" },
  { path: "/konfigurator/", priority: "0.9" },
  { path: "/kontakt/", priority: "0.9" },
  { path: "/uslugi/landing-page/", priority: "0.8" },
  { path: "/cennik/", priority: "0.8" },
  { path: "/realizacje/", priority: "0.8" },
  { path: "/strony-internetowe-gniezno/", priority: "0.8" },
  { path: "/baza-wiedzy/", priority: "0.8" },
  { path: "/dlaczego-ja/", priority: "0.8" },
  { path: "/jak-pracuje/", priority: "0.8" },
  { path: "/faq/", priority: "0.7" },
  { path: "/baza-wiedzy/ile-kosztuje-strona-internetowa/", priority: "0.7" },
  { path: "/baza-wiedzy/strona-internetowa-czy-landing-page/", priority: "0.7" },
  { path: "/baza-wiedzy/co-powinna-zawierac-strona-firmowa/", priority: "0.7" },
  { path: "/uslugi/start-online/", priority: "0.6" },
  { path: "/polityka-prywatnosci/", priority: "0.5" }
];

export const serviceCards = [
  {
    title: "Strony internetowe",
    description:
      "Strona dla firmy, która jasno pokazuje ofertę, buduje wiarygodność i prowadzi klienta do kontaktu.",
    points: [
      "strona firmowa",
      "landing page",
      "podstrony usług",
      "formularz kontaktowy",
      "podstawowe SEO",
      "publikacja na domenie"
    ],
    href: "/uslugi/strony-internetowe/",
    cta: "Zobacz strony internetowe"
  },
  {
    title: "Oferty PDF",
    description:
      "Estetyczny materiał ofertowy, który możesz wysłać klientowi po rozmowie, zapytaniu albo przez social media.",
    points: [
      "uporządkowanie treści",
      "projekt graficzny",
      "wersja gotowa do wysyłki",
      "dopasowanie do marki",
      "spójność ze stroną"
    ],
    href: "/uslugi/oferty-pdf/",
    cta: "Zobacz oferty PDF"
  }
];

export const pricingCards = [
  {
    title: "Strona internetowa",
    price: "Od 499 zł",
    description:
      "Prosta strona dla firmy. Większe projekty wyceniam indywidualnie po konfiguratorze.",
    cta: "Wyceń stronę",
    href: "/konfigurator/?type=strona"
  },
  {
    title: "Abonament strony",
    price: "Od 99 zł / mies.",
    description:
      "Dobre rozwiązanie, jeśli wolisz stałą miesięczną opłatę zamiast większego kosztu na start.",
    cta: "Zapytaj o abonament",
    href: "/konfigurator/?budget=abonament"
  },
  {
    title: "Oferta PDF",
    price: "Od 299 zł",
    description: "Estetyczna oferta gotowa do wysyłki klientom.",
    cta: "Wyceń PDF",
    href: "/konfigurator/?type=pdf"
  }
];

export const caseStudies = [
  {
    name: "Barman Duszek",
    industry: "Usługi eventowe",
    goal: "Czytelnie pokazać ofertę i ułatwić wysłanie zapytania o obsługę wydarzenia.",
    scope: "Struktura oferty, sekcje sprzedażowe, CTA i układ pod telefon.",
    result: "Projekt skupiony na szybkim zrozumieniu usługi i kontakcie.",
    href: "/realizacje/#barman-duszek"
  },
  {
    name: "Aluraf-Tarasy",
    industry: "Tarasy i zabudowy",
    goal: "Uporządkować prezentację zakresu prac i podnieść wiarygodność lokalnej oferty.",
    scope: "Strona usługowa, układ realizacji, podstawowe SEO i kontakt.",
    result: "Czytelna prezentacja usług z mocnym naciskiem na mobile.",
    href: "/realizacje/#aluraf-tarasy"
  },
  {
    name: "Strefa Komfortu",
    industry: "Usługi lokalne",
    goal: "Przygotować stronę, która spokojnie prowadzi klienta od oferty do kontaktu.",
    scope: "Architektura treści, sekcje zaufania, formularz i wersja mobilna.",
    result: "Lekka strona bez przeładowania efektami.",
    href: "/realizacje/#strefa-komfortu"
  }
];

export const processSteps = [
  {
    title: "Wypełniasz konfigurator",
    description: "Zaznaczasz kilka odpowiedzi, żebym wiedział, czego potrzebujesz."
  },
  {
    title: "Ustalamy zakres",
    description: "Doprecyzuję cel, treści, podstrony, materiały i termin."
  },
  {
    title: "Projektuję i wdrażam stronę",
    description: "Przygotowuję układ, treści, wersję mobile i techniczne podstawy."
  },
  {
    title: "Publikujemy i sprawdzamy działanie",
    description: "Strona trafia na domenę, a Ty dostajesz gotowy projekt do pokazywania klientom."
  }
];

export const faqGroups = [
  {
    category: "Ceny",
    items: [
      {
        question: "Ile kosztuje strona internetowa?",
        answer:
          "Prosta strona startuje od 499 zł. Dokładna cena zależy od liczby sekcji, podstron, treści, formularzy i dodatkowych funkcji."
      },
      {
        question: "Czy mogę wybrać abonament?",
        answer:
          "Tak. Abonament zaczyna się od 99 zł miesięcznie i jest dobrą opcją, gdy wolisz niższy koszt na start."
      },
      {
        question: "Ile kosztuje oferta PDF?",
        answer:
          "Oferta PDF startuje od 299 zł. Cena zależy od ilości treści, zakresu projektu i dopasowania do marki."
      }
    ]
  },
  {
    category: "Strony internetowe",
    items: [
      {
        question: "Czy strona będzie dobrze działać na telefonie?",
        answer:
          "Tak. Projekt zaczynam od wersji mobile, bo to tam wielu klientów pierwszy raz zobaczy Twoją ofertę."
      },
      {
        question: "Czy pomagasz z treściami?",
        answer:
          "Tak. Pomagam uporządkować ofertę, nazwać sekcje i przygotować treści tak, aby klient szybko zrozumiał, co robisz."
      }
    ]
  },
  {
    category: "Oferty PDF",
    items: [
      {
        question: "Kiedy warto przygotować ofertę PDF?",
        answer:
          "Gdy często wysyłasz klientom szczegóły po rozmowie, przez social media albo mailowo i chcesz wyglądać profesjonalniej."
      },
      {
        question: "Czy PDF może pasować do strony?",
        answer:
          "Tak. Jeśli tworzę też stronę, PDF może być spójny wizualnie z układem, kolorami i językiem marki."
      }
    ]
  },
  {
    category: "Konfigurator",
    items: [
      {
        question: "Czy konfigurator zobowiązuje do zakupu?",
        answer:
          "Nie. Konfigurator pomaga zebrać informacje i przygotować sensowną propozycję zakresu oraz orientacyjną wycenę."
      },
      {
        question: "Co dzieje się po wysłaniu formularza?",
        answer:
          "Otrzymuję informacje o projekcie i wracam z pytaniami albo konkretną propozycją dalszego działania."
      }
    ]
  },
  {
    category: "Domena i publikacja",
    items: [
      {
        question: "Czy pomagasz opublikować stronę na domenie?",
        answer:
          "Tak. Przygotowuję publikację i pomagam przejść przez podstawowe ustawienia domeny."
      },
      {
        question: "Czy potrzebuję własnej domeny?",
        answer:
          "Nie musisz mieć jej od razu. Jeśli dopiero startujesz, ustalimy najlepszy moment i sposób podpięcia domeny."
      }
    ]
  },
  {
    category: "Współpraca",
    items: [
      {
        question: "Ile trwa realizacja?",
        answer:
          "Proste projekty zwykle trwają 2-4 tygodnie, zależnie od zakresu, materiałów i szybkości decyzji po stronie klienta."
      },
      {
        question: "Czy muszę znać technikalia?",
        answer:
          "Nie. Po mojej stronie jest uporządkowanie procesu, techniczne podstawy, wdrożenie i spokojne wyjaśnienie decyzji."
      }
    ]
  }
];

export const articles = [
  {
    slug: "ile-kosztuje-strona-internetowa",
    href: "/baza-wiedzy/ile-kosztuje-strona-internetowa/",
    title: "Ile kosztuje strona internetowa?",
    description:
      "Cena strony zależy od zakresu. Prosty start może kosztować od 499 zł, a abonament od 99 zł miesięcznie.",
    sections: [
      {
        title: "Od czego zależy cena strony?",
        body:
          "Największy wpływ mają liczba sekcji, liczba podstron, przygotowanie treści, materiały graficzne, formularze i dodatkowe funkcje. Prosta strona firmowa może być niewielka, ale większy serwis usługowy wymaga więcej pracy."
      },
      {
        title: "Orientacyjne ceny",
        body:
          "W DreamWeb Studio prosta strona startuje od 499 zł. Abonament strony zaczyna się od 99 zł miesięcznie, a oferta PDF od 299 zł. Dokładną propozycję najlepiej przygotować po krótkim konfiguratorze."
      },
      {
        title: "Jak długo trwa realizacja?",
        body:
          "Proste projekty zwykle trwają 2-4 tygodnie. Termin zależy od zakresu, dostępnych materiałów i tego, jak szybko można doprecyzować treści."
      }
    ]
  },
  {
    slug: "strona-internetowa-czy-landing-page",
    href: "/baza-wiedzy/strona-internetowa-czy-landing-page/",
    title: "Strona internetowa czy landing page?",
    description:
      "Strona firmowa lepiej opisuje firmę szerzej, a landing page skupia się na jednej ofercie, kampanii lub usłudze.",
    sections: [
      {
        title: "Czym jest strona internetowa?",
        body:
          "Strona firmowa pokazuje ofertę, zakres usług, informacje o firmie, realizacje, odpowiedzi na pytania i różne ścieżki kontaktu. Sprawdza się, gdy chcesz budować szerszą obecność online."
      },
      {
        title: "Czym jest landing page?",
        body:
          "Landing page skupia się na jednym celu: zapytaniu, zapisie, sprzedaży jednej usługi albo kampanii reklamowej. Ma krótszą strukturę i bardzo jasne CTA."
      },
      {
        title: "Co wybrać?",
        body:
          "Jeśli masz kilka usług i chcesz budować wiarygodność, wybierz stronę firmową. Jeśli promujesz jedną ofertę lub testujesz kampanię, landing page może być szybszym startem. Można go później rozbudować."
      }
    ]
  },
  {
    slug: "co-powinna-zawierac-strona-firmowa",
    href: "/baza-wiedzy/co-powinna-zawierac-strona-firmowa/",
    title: "Co powinna zawierać strona firmowa?",
    description:
      "Dobra strona firmowa ma jasną ofertę, sekcje zaufania, realizacje, cennik lub modele współpracy, FAQ i wygodny kontakt.",
    sections: [
      {
        title: "Jasna oferta i odbiorca",
        body:
          "Klient powinien szybko zrozumieć, czym się zajmujesz, dla kogo pracujesz i jaki problem rozwiązujesz. Hero, oferta i CTA muszą działać razem."
      },
      {
        title: "Dowody zaufania i proces",
        body:
          "Pomagają realizacje, opis sposobu pracy, odpowiedzi na obawy i pokazanie, co klient dostaje na końcu. Nie trzeba wymyślać opinii, jeśli ich jeszcze nie ma."
      },
      {
        title: "Mobile-first i kontakt",
        body:
          "Strona powinna być wygodna na telefonie: czytelne teksty, duże przyciski, formularz bez frustracji i łatwy dostęp do telefonu lub WhatsApp."
      }
    ]
  }
];

export const pageContent = {
  services: {
    h1: "Usługi DreamWeb Studio",
    lead:
      "Pomagam małym firmom uporządkować ofertę i pokazać ją w formie strony internetowej albo estetycznej oferty PDF.",
    sections: [
      {
        title: "Dwie główne ścieżki",
        body:
          "Najczęściej pracuję nad stronami internetowymi i ofertami PDF. Landing page traktuję jako typ strony, gdy potrzebujesz jednego celu i krótszej ścieżki do kontaktu."
      },
      {
        title: "Dla kogo jest oferta?",
        items: [
          "dla firm usługowych i lokalnych biznesów",
          "dla nowych firm, które chcą dobrze wystartować",
          "dla firm ze starą lub nieczytelną stroną",
          "dla osób, które mają ofertę, ale potrzebują ją uporządkować"
        ]
      }
    ]
  },
  websites: {
    h1: "Strony internetowe dla małych firm",
    lead:
      "Projektuję strony, które jasno pokazują ofertę, dobrze działają na telefonie i ułatwiają klientowi wysłanie zapytania.",
    price: "Cena od 499 zł",
    cta: "Wyceń stronę",
    sections: [
      {
        title: "Co otrzymujesz?",
        items: [
          "układ strony zaprojektowany mobile-first",
          "czytelne sekcje i CTA",
          "formularz kontaktowy",
          "podstawowe SEO i metadane",
          "publikację na domenie",
          "pomoc w uporządkowaniu treści"
        ]
      },
      {
        title: "Dla kogo?",
        items: [
          "firmy usługowe",
          "lokalne biznesy",
          "nowe firmy",
          "firmy ze starą stroną",
          "specjaliści, którzy chcą lepiej pokazać ofertę"
        ]
      },
      {
        title: "Rodzaje stron",
        items: [
          "prosta strona firmowa",
          "strona z podstronami",
          "landing page",
          "strona pod lokalne SEO"
        ]
      }
    ]
  },
  landing: {
    h1: "Landing page dla jednej oferty, usługi albo kampanii",
    lead:
      "Landing page pomaga skupić uwagę klienta na jednym celu: zapytaniu, kontakcie albo konkretnej ofercie.",
    sections: [
      {
        title: "Kiedy landing page ma sens?",
        items: [
          "promujesz jedną usługę",
          "prowadzisz kampanię reklamową",
          "chcesz szybko przetestować ofertę",
          "potrzebujesz krótszej ścieżki do kontaktu"
        ]
      },
      {
        title: "Co powinien zawierać?",
        items: [
          "jasny nagłówek i obietnicę",
          "opis problemu i rozwiązania",
          "sekcję zaufania",
          "krótki FAQ",
          "mocne CTA i formularz"
        ]
      },
      {
        title: "Landing page vs strona firmowa",
        body:
          "Strona firmowa pokazuje firmę szerzej. Landing page jest węższy i pracuje na jeden konkretny cel, ale można go później rozbudować."
      }
    ]
  },
  pdf: {
    h1: "Oferty PDF, które wyglądają profesjonalnie i są gotowe do wysyłki",
    lead:
      "Porządkuję treści i projektuję estetyczny PDF, który możesz wysłać po rozmowie, zapytaniu albo przez social media.",
    price: "Cena od 299 zł",
    cta: "Wyceń PDF",
    sections: [
      {
        title: "Kiedy przyda się oferta PDF?",
        items: [
          "po rozmowie z klientem",
          "gdy oferta jest zbyt długa na wiadomość",
          "gdy chcesz wyglądać spójnie i profesjonalnie",
          "gdy często odpowiadasz na podobne zapytania"
        ]
      },
      {
        title: "Co zawiera?",
        items: [
          "uporządkowane treści",
          "projekt graficzny",
          "wersję gotową do wysyłki",
          "dopasowanie do marki",
          "opcjonalną spójność ze stroną"
        ]
      }
    ]
  },
  startOnline: {
    h1: "Pomoc przy podstawowej obecności online",
    lead:
      "To nie jest główny pakiet, tylko opcjonalne wsparcie przy tworzeniu strony, gdy trzeba uporządkować podstawowe informacje online.",
    sections: [
      {
        title: "Co może obejmować?",
        items: [
          "podstawowe uporządkowanie danych kontaktowych",
          "wskazówki do wizytówki Google",
          "linki do social media",
          "spójność informacji na stronie i profilach",
          "prosty plan, co poprawić po publikacji"
        ]
      }
    ]
  },
  why: {
    h1: "Dlaczego DreamWeb Studio?",
    lead:
      "Bo dobra strona dla małej firmy nie musi być przeładowana. Musi być jasna, szybka, wiarygodna i wygodna na telefonie.",
    goodFor: [
      "chcesz uporządkować ofertę przed publikacją strony",
      "potrzebujesz spokojnego procesu bez technicznego chaosu",
      "zależy Ci na mobile-first i podstawowym SEO",
      "wolisz prostą wycenę zamiast pakietów bez sensu"
    ],
    notFor: [
      "szukasz dużej platformy e-commerce",
      "potrzebujesz rozbudowanego systemu webowego",
      "chcesz stronę opartą wyłącznie na efektach wizualnych",
      "oczekujesz obietnicy wyników bez pracy nad ofertą"
    ]
  },
  work: {
    h1: "Jak wygląda współpraca?",
    lead:
      "Proces jest prosty: najpierw zbieram kontekst, potem układam zakres, projektuję wersję mobile i wdrażam gotową stronę.",
    steps: [
      "Konfigurator",
      "Rozmowa lub doprecyzowanie",
      "Struktura i treści",
      "Projekt i wdrożenie",
      "Publikacja i wsparcie"
    ],
    prepare: [
      "logo, jeśli już je masz",
      "podstawowe informacje o ofercie",
      "zdjęcia lub materiały, które warto pokazać",
      "dane kontaktowe i linki do profili"
    ],
    deliverables: [
      "gotową stronę lub ofertę PDF",
      "czytelny układ i wersję mobile",
      "podstawowe SEO",
      "publikację na domenie, jeśli dotyczy",
      "informację, co można rozwijać dalej"
    ]
  }
};

export function getCanonical(path: string) {
  return new URL(path, site.domain).toString();
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getAllFaqItems() {
  return faqGroups.flatMap((group) => group.items);
}

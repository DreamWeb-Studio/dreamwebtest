import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Answers = {
  kind: string;
  goal: string;
  assets: string[];
  scope: string;
  budget: string;
  deadline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const initialAnswers: Answers = {
  kind: "",
  goal: "",
  assets: [],
  scope: "",
  budget: "",
  deadline: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false
};

const steps = [
  {
    key: "kind",
    title: "Co chcesz przygotować?",
    options: ["Strona internetowa", "Oferta PDF", "Strona + PDF", "Nie wiem, potrzebuję pomocy"]
  },
  {
    key: "goal",
    title: "Jaki jest główny cel?",
    options: [
      "więcej zapytań",
      "lepszy wizerunek",
      "uporządkowanie oferty",
      "kampania / reklama",
      "pokazanie realizacji",
      "start nowej firmy"
    ]
  },
  {
    key: "assets",
    title: "Co już masz?",
    options: ["domenę", "logo", "teksty", "zdjęcia", "starą stronę", "nic, zaczynam od zera"],
    multiple: true
  },
  {
    key: "scope",
    title: "Jaki zakres strony?",
    options: ["prosta jedna strona", "strona z kilkoma sekcjami", "strona z podstronami", "nie wiem"]
  },
  {
    key: "budget",
    title: "Budżet",
    options: ["do 500 zł", "500-1000 zł", "1000-2000 zł", "powyżej 2000 zł", "abonament od 99 zł / mies.", "nie wiem"]
  },
  {
    key: "deadline",
    title: "Termin",
    options: ["jak najszybciej", "2-4 tygodnie", "w tym kwartale", "bez presji"]
  },
  {
    key: "contact",
    title: "Kontakt"
  }
] as const;

const endpoint = import.meta.env.PUBLIC_CONTACT_ENDPOINT as string | undefined;

export function ProjectConfigurator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates: Partial<Answers> = {};
    const type = params.get("type") || params.get("kind");
    const budget = params.get("budget") || params.get("model");

    if (type) {
      if (type === "pdf" || type.includes("PDF")) updates.kind = "Oferta PDF";
      else if (type === "strona" || type.includes("Strona")) updates.kind = type.includes("PDF") ? "Strona + PDF" : "Strona internetowa";
      else updates.kind = type;
    }

    if (budget) {
      updates.budget = budget.includes("Abonament") || budget === "abonament" ? "abonament od 99 zł / mies." : budget;
    }

    if (params.get("name")) updates.name = params.get("name") || "";
    if (params.get("email")) updates.email = params.get("email") || "";

    if (Object.keys(updates).length) {
      setAnswers((current) => ({ ...current, ...updates }));
    }
  }, []);

  const progress = ((step + 1) / steps.length) * 100;
  const current = steps[step];

  function setSingle(key: keyof Answers, value: string) {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [key]: value }));
    setError("");
  }

  function toggleAsset(value: string) {
    setAnswers((currentAnswers) => {
      const exists = currentAnswers.assets.includes(value);
      return {
        ...currentAnswers,
        assets: exists ? currentAnswers.assets.filter((item) => item !== value) : [...currentAnswers.assets, value]
      };
    });
    setError("");
  }

  function validateStep(targetStep = step) {
    const key = steps[targetStep].key;
    if (key === "assets") {
      return answers.assets.length > 0;
    }
    if (key === "contact") {
      return Boolean(
        answers.name.trim() &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email) &&
          answers.consent
      );
    }
    return Boolean(answers[key as keyof Answers]);
  }

  function next() {
    if (!validateStep()) {
      setError(current.key === "contact" ? "Uzupełnij imię, poprawny e-mail i zgodę na kontakt." : "Wybierz jedną z odpowiedzi.");
      return;
    }
    setError("");
    setStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    if (!validateStep(6)) {
      setError("Uzupełnij imię, poprawny e-mail i zgodę na kontakt.");
      return;
    }

    try {
      const payload = { ...answers, source: "konfigurator", submittedAt: new Date().toISOString() };
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Nie udało się wysłać formularza.");
        }
      } else {
        sessionStorage.setItem("dreamweb-configurator-submission", JSON.stringify(payload));
      }

      setStatus("success");
      setError("");
    } catch {
      setStatus("error");
      setError("Nie udało się wysłać formularza. Spróbuj ponownie albo wybierz WhatsApp.");
    }
  }

  return (
    <form className="rounded-[28px] border border-brand-border bg-white p-4 shadow-soft md:p-6" onSubmit={submit}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-brand-violet">Krok {step + 1} z {steps.length}</p>
        <p className="text-sm text-brand-muted">Bez zobowiązań</p>
      </div>
      <div className="mt-4 h-2 rounded-full bg-brand-light">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-7">
        <h2 className="text-2xl font-semibold tracking-tight text-brand-text">{current.title}</h2>

        {current.key !== "contact" ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {current.options?.map((option) => {
              const selected =
                current.key === "assets"
                  ? answers.assets.includes(option)
                  : answers[current.key as keyof Answers] === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    current.key === "assets"
                      ? toggleAsset(option)
                      : setSingle(current.key as keyof Answers, option)
                  }
                  className={`min-h-16 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                    selected
                      ? "border-brand-violet bg-violet-50 text-brand-violet"
                      : "border-brand-border bg-brand-light text-brand-text hover:border-brand-violet/60"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-brand-text">
                Imię
                <input
                  className="min-h-12 rounded-2xl border border-brand-border px-4 text-base font-normal outline-none focus:border-brand-violet"
                  value={answers.name}
                  onChange={(event) => setSingle("name", event.target.value)}
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-brand-text">
                E-mail
                <input
                  type="email"
                  className="min-h-12 rounded-2xl border border-brand-border px-4 text-base font-normal outline-none focus:border-brand-violet"
                  value={answers.email}
                  onChange={(event) => setSingle("email", event.target.value)}
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-brand-text">
              Telefon opcjonalnie
              <input
                type="tel"
                className="min-h-12 rounded-2xl border border-brand-border px-4 text-base font-normal outline-none focus:border-brand-violet"
                value={answers.phone}
                onChange={(event) => setSingle("phone", event.target.value)}
                autoComplete="tel"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-brand-text">
              Wiadomość opcjonalnie
              <textarea
                className="min-h-28 rounded-2xl border border-brand-border px-4 py-3 text-base font-normal outline-none focus:border-brand-violet"
                value={answers.message}
                onChange={(event) => setSingle("message", event.target.value)}
              />
            </label>
            <label className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-brand-border text-brand-violet"
                checked={answers.consent}
                onChange={(event) => setAnswers((currentAnswers) => ({ ...currentAnswers, consent: event.target.checked }))}
              />
              <span>Wyrażam zgodę na kontakt i przetwarzanie danych w celu odpowiedzi na zapytanie.</span>
            </label>
          </div>
        )}
      </div>

      {error && <p role="alert" className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      {status === "success" && (
        <p role="status" className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          Dziękuję. Projekt został zapisany i formularz jest gotowy do podpięcia pod docelowy endpoint wysyłki.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Nie udało się wysłać formularza.
        </p>
      )}

      <div className="sticky bottom-[72px] mt-7 grid gap-3 rounded-2xl border border-brand-border bg-white/96 p-3 backdrop-blur md:static md:grid-cols-[auto_1fr_auto] md:items-center md:border-0 md:bg-transparent md:p-0">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((currentStep) => Math.max(currentStep - 1, 0))}
          className="min-h-12 rounded-full border border-brand-border px-5 text-sm font-semibold text-brand-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          Wstecz
        </button>
        <div className="hidden text-center text-xs text-brand-muted md:block">Odpowiedzi pomagają przygotować konkretną propozycję.</div>
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="min-h-12 rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet px-5 text-sm font-semibold text-white shadow-glow"
          >
            Dalej
          </button>
        ) : (
          <button
            type="submit"
            className="min-h-12 rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet px-5 text-sm font-semibold text-white shadow-glow"
          >
            Wyślij projekt do wyceny
          </button>
        )}
      </div>
    </form>
  );
}

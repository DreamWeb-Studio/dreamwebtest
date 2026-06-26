import { useMemo, useState } from "react";

const steps = [
  {
    key: "kind",
    title: "Co chcesz przygotować?",
    options: ["Strona internetowa", "Oferta PDF", "Strona + PDF", "Nie wiem, potrzebuję pomocy"]
  },
  {
    key: "model",
    title: "Preferowany model",
    options: ["Jednorazowa realizacja", "Abonament od 99 zł / mies.", "Nie wiem"]
  }
] as const;

export function MiniConfigurator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "" });

  const quoteHref = useMemo(() => {
    const params = new URLSearchParams();
    Object.entries(answers).forEach(([key, value]) => params.set(key, value));
    if (contact.name) params.set("name", contact.name);
    if (contact.email) params.set("email", contact.email);
    return `/konfigurator/${params.toString() ? `?${params.toString()}` : ""}`;
  }, [answers, contact]);

  function choose(key: string, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStep((current) => Math.min(current + 1, steps.length));
  }

  return (
    <div className="rounded-[28px] border border-white/12 bg-white/[0.075] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-soft">Mini konfigurator</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Wstępna ścieżka wyceny</h2>
        </div>
        <span className="rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-brand-soft">
          {Math.min(step + 1, 3)}/3
        </span>
      </div>

      <div className="mt-5 h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet transition-all"
          style={{ width: `${((Math.min(step, 2) + 1) / 3) * 100}%` }}
        />
      </div>

      {step < steps.length ? (
        <div className="mt-6">
          <p className="font-semibold text-white">{steps[step].title}</p>
          <div className="mt-4 grid gap-3">
            {steps[step].options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => choose(steps[step].key, option)}
                className="min-h-12 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-left text-sm font-semibold text-brand-soft transition hover:border-brand-magenta/60 hover:bg-white/10 hover:text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <p className="font-semibold text-white">Zostaw kontakt albo przejdź do pełnej wyceny</p>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm text-brand-soft">
              Imię
              <input
                className="min-h-12 rounded-2xl border border-white/12 bg-white/[0.08] px-4 text-white outline-none placeholder:text-brand-soft/70"
                value={contact.name}
                onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                placeholder="Jak się do Ciebie zwracać?"
              />
            </label>
            <label className="grid gap-1 text-sm text-brand-soft">
              E-mail
              <input
                type="email"
                className="min-h-12 rounded-2xl border border-white/12 bg-white/[0.08] px-4 text-white outline-none placeholder:text-brand-soft/70"
                value={contact.email}
                onChange={(event) => setContact((current) => ({ ...current, email: event.target.value }))}
                placeholder="adres@email.pl"
              />
            </label>
          </div>
          <a
            href={quoteHref}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet px-5 text-sm font-semibold text-white shadow-glow"
          >
            Przejdź do pełnej wyceny
          </a>
        </div>
      )}
    </div>
  );
}

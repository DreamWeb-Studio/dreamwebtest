import { useState } from "react";
import type { FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false
};

const endpoint = import.meta.env.PUBLIC_CONTACT_ENDPOINT as string | undefined;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setError("");

    if (!form.name.trim()) {
      setError("Podaj imię.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Podaj poprawny adres e-mail.");
      return;
    }

    if (!form.message.trim()) {
      setError("Napisz krótko, czego potrzebujesz.");
      return;
    }

    if (!form.consent) {
      setError("Zaznacz zgodę na kontakt.");
      return;
    }

    try {
      const payload = { ...form, source: "kontakt", submittedAt: new Date().toISOString() };
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
        sessionStorage.setItem("dreamweb-contact-draft", JSON.stringify(payload));
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setError("Nie udało się wysłać formularza. Spróbuj ponownie albo wybierz WhatsApp.");
    }
  }

  return (
    <form className="grid gap-4 rounded-[28px] border border-brand-border bg-white p-5 shadow-soft" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-text">
          Imię
          <input
            className="min-h-12 rounded-2xl border border-brand-border bg-white px-4 text-base font-normal outline-none focus:border-brand-violet"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-text">
          E-mail
          <input
            type="email"
            className="min-h-12 rounded-2xl border border-brand-border bg-white px-4 text-base font-normal outline-none focus:border-brand-violet"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-brand-text">
        Telefon opcjonalnie
        <input
          type="tel"
          className="min-h-12 rounded-2xl border border-brand-border bg-white px-4 text-base font-normal outline-none focus:border-brand-violet"
          value={form.phone}
          onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
          autoComplete="tel"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-text">
        Wiadomość
        <textarea
          className="min-h-32 rounded-2xl border border-brand-border bg-white px-4 py-3 text-base font-normal outline-none focus:border-brand-violet"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 rounded border-brand-border text-brand-violet"
          checked={form.consent}
          onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
        />
        <span>Wyrażam zgodę na kontakt w sprawie mojego zapytania.</span>
      </label>

      {error && <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      {status === "success" && (
        <p role="status" className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          Dziękuję. Formularz jest gotowy do podpięcia pod docelowy endpoint wysyłki.
        </p>
      )}
      {status === "error" && !error && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Nie udało się wysłać formularza.
        </p>
      )}

      <button
        type="submit"
        className="min-h-12 rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet px-5 text-sm font-semibold text-white shadow-glow"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

import { useEffect, useState } from "react";
import { contact, mobileNav, offerNav } from "../../data/site";

type Props = {
  logo: string;
};

export function MobileMenu({ logo }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-white"
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-brand-dark/92 backdrop-blur-xl lg:hidden">
          <div className="flex min-h-screen flex-col overflow-y-auto px-5 pb-28 pt-5">
            <div className="flex items-center justify-between gap-4">
              <a href="/" aria-label="DreamWeb Studio - strona główna" onClick={() => setOpen(false)}>
                <img src={logo} alt="DreamWeb Studio" width={342} height={88} className="h-10 w-auto" />
              </a>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-white"
                aria-label="Zamknij menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-brand-soft">Oferta</p>
              {offerNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-3 text-base font-semibold text-white hover:bg-white/[0.08]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <nav className="mt-4 grid gap-1" aria-label="Menu mobilne">
              {mobileNav
                .filter((item) => item.label !== "Oferta")
                .map((item) => (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-brand-soft hover:bg-white/[0.08] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
            </nav>

            <div className="mt-6 grid gap-3">
              <a
                href="/konfigurator/"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet px-5 text-sm font-semibold text-white shadow-glow"
              >
                Wyceń projekt
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contact.whatsapp}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-4 text-sm font-semibold text-white"
                >
                  WhatsApp
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-4 text-sm font-semibold text-white"
                >
                  Zadzwoń
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

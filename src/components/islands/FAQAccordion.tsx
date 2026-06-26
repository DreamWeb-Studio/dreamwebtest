import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  category: string;
  items: FaqItem[];
};

type Props = {
  groups: FaqGroup[];
};

export function FAQAccordion({ groups }: Props) {
  const [openId, setOpenId] = useState("0-0");

  return (
    <div className="grid gap-6">
      {groups.map((group, groupIndex) => (
        <section key={group.category} className="rounded-[28px] border border-brand-border bg-white p-4 shadow-soft">
          <h2 className="px-2 pb-3 text-lg font-semibold text-brand-text">{group.category}</h2>
          <div className="grid gap-2">
            {group.items.map((item, itemIndex) => {
              const id = `${groupIndex}-${itemIndex}`;
              const isOpen = openId === id;
              return (
                <div key={item.question} className="rounded-2xl border border-brand-border bg-brand-light">
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-brand-text"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${id}`}
                    onClick={() => setOpenId(isOpen ? "" : id)}
                  >
                    <span>{item.question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-lg text-brand-violet">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${id}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-sm leading-6 text-brand-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

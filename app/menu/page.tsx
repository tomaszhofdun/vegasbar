import type { Metadata } from "next";
import { menu, sosy, posypki, polewy } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menu | Bar Vegas Skoki",
  description:
    "Pełne menu Bar Vegas w Skokach: kurczak burgery, hot-dogi amerykańskie, zapiekanki na świeżej bagietce, panierowany kurczak i dodatki.",
};

export default function MenuPage() {
  return (
    <main className="bg-char">
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-display text-sm tracking-[0.3em] text-gold">
          BAR VEGAS
        </p>
        <h1 className="mt-3 font-display text-5xl text-cream sm:text-6xl">
          Menu
        </h1>

        <nav className="mt-8 flex flex-wrap gap-3">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-sm border border-cream/20 px-3 py-1.5 text-sm text-cream/80 transition hover:border-gold hover:text-gold"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-16">
          {menu.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex items-baseline justify-between border-b border-gold/40 pb-3">
                <h2 className="font-display text-3xl text-gold sm:text-4xl">
                  {cat.title}
                </h2>
              </div>
              {cat.subtitle && (
                <p className="mt-2 text-sm uppercase tracking-widest text-cream/40">
                  {cat.subtitle}
                </p>
              )}

              <ul className="mt-6 divide-y divide-cream/10">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-6 py-4">
                    <div>
                      <p className="font-display text-lg tracking-wide text-cream">
                        {item.name}
                        {item.badge && (
                          <span className="ml-3 rounded-sm bg-ember px-2 py-0.5 align-middle font-body text-xs font-semibold uppercase tracking-wide text-cream">
                            {item.badge}
                          </span>
                        )}
                      </p>
                      {item.desc && (
                        <p className="mt-1 max-w-md text-sm text-cream/60">{item.desc}</p>
                      )}
                    </div>
                    <p className="whitespace-nowrap font-display text-lg text-gold">
                      {item.price} zł
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-cream/10 pt-10 text-sm text-cream/60 sm:grid-cols-3">
          <div>
            <p className="font-display text-base text-gold">Sosy do wyboru</p>
            <p className="mt-2">{sosy}</p>
          </div>
          <div>
            <p className="font-display text-base text-gold">Posypki do frytek</p>
            <p className="mt-2">{posypki}</p>
          </div>
          <div>
            <p className="font-display text-base text-gold">Polewy</p>
            <p className="mt-2">{polewy}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

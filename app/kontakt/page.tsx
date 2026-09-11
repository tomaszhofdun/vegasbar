import type { Metadata } from "next";
import { contact, hours } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Kontakt | Bar Vegas Skoki",
  description: "Namiary na Bar Vegas w Skokach: telefon, godziny otwarcia i Facebook.",
};

export default function KontaktPage() {
  return (
    <main className="bg-ink text-cream">
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-display text-sm tracking-[0.3em] text-gold">
          BAR VEGAS
        </p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">Kontakt</h1>

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg text-gold">Telefon</p>
            <a
              href={contact.phoneHref}
              className="mt-2 block font-display text-3xl transition hover:text-gold"
            >
              {contact.phone}
            </a>

            <p className="mt-8 font-display text-lg text-gold">Lokalizacja</p>
            <p className="mt-2 text-cream/80">{contact.city}</p>

            <p className="mt-8 font-display text-lg text-gold">Social media</p>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-cream/80 underline decoration-gold underline-offset-4 transition hover:text-gold"
            >
              Odwiedź nas na Facebooku →
            </a>
          </div>

          <div>
            <p className="font-display text-lg text-gold">Godziny otwarcia</p>
            <ul className="mt-3 space-y-2 text-cream/80">
              {hours.map((h) => (
                <li key={h.day} className="flex max-w-xs justify-between gap-6 border-b border-cream/10 py-2">
                  <span>{h.day}</span>
                  <span className={h.hours === "Zamknięte" ? "text-cream/40" : "font-semibold text-cream"}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-sm bg-gold p-8 text-ink">
          <p className="font-display text-2xl">Zamówienia telefoniczne na wynos</p>
          <p className="mt-2 text-ink/80">
            Zadzwoń, złóż zamówienie i odbierz je świeże, prosto z kuchni.
          </p>
          <a
            href={contact.phoneHref}
            className="mt-5 inline-block rounded-sm bg-ink px-6 py-3 font-display tracking-wide text-cream transition hover:bg-char"
          >
            {contact.phone}
          </a>
        </div>
      </section>
    </main>
  );
}

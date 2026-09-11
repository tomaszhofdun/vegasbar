import { contact, hours } from "@/lib/menu-data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wide text-gold">BAR VEGAS</p>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            Jedzenie, do którego się wraca. Chrupiące kurczak burgery, hot-dogi
            amerykańskie, zapiekanki na świeżej bagietce — w samym sercu Skoków.
          </p>
        </div>

        <div>
          <p className="font-display text-lg tracking-wide text-gold">Godziny otwarcia</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6 max-w-[220px]">
                <span>{h.day}</span>
                <span className={h.hours === "Zamknięte" ? "text-cream/40" : ""}>
                  {h.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg tracking-wide text-gold">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <a href={contact.phoneHref} className="hover:text-gold">
                📞 {contact.phone}
              </a>
            </li>
            <li>📍 {contact.city}</li>
            <li>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Facebook →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Bar Vegas, Skoki. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

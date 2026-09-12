import Image from "next/image";
import Link from "next/link";
import { contact, hours } from "@/lib/menu-data";

const reasons = [
  {
    title: "Soczysty kurczak",
    desc: "W ekstra chrupiącej panierce, smażony na świeżo pod zamówienie.",
  },
  {
    title: "Świeże składniki",
    desc: "Warzywa i pieczywo dowożone każdego dnia roboczego.",
  },
  {
    title: "Autorskie sosy",
    desc: "Własne receptury, które robią różnicę w każdym kęsie.",
  },
  {
    title: "Robione z pasją",
    desc: "Jeden kęs i wiesz, że to Twój burger.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="relative z-10">
            <p className="font-display text-sm tracking-[0.3em] text-gold">
              BAR VEGAS · SKOKI
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl md:text-7xl">
              Jedzenie,
              <br />
              do którego
              <br />
              <span className="text-gold">się wraca.</span>
            </h1>
            <p className="mt-6 max-w-md text-cream/70">
              Chrupiące kurczak burgery, hot-dogi amerykańskie i zapiekanki na
              świeżej bagietce. Jedyne w swoim rodzaju smaki w samym centrum
              Skoków.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-sm bg-gold px-6 py-3 font-display tracking-wide text-ink transition hover:bg-cream"
              >
                Zobacz menu
              </Link>
              <a
                href={contact.phoneHref}
                className="rounded-sm border border-cream/30 px-6 py-3 font-display tracking-wide text-cream transition hover:border-gold hover:text-gold"
              >
                Zadzwoń: {contact.phone}
              </a>
            </div>
          </div>

          <div
            className="relative h-72 w-full overflow-hidden sm:h-96 md:h-[30rem]"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <Image
              src="/images/crunch-test.png"
              alt="Chrupiący kurczak burger z Bar Vegas"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-gold py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-ink">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>CHRUPIĄCE</span>
              <span>·</span>
              <span>SOCZYSTE</span>
              <span>·</span>
              <span>PIKANTNE</span>
              <span>·</span>
              <span>JEDYNE W SWOIM RODZAJU</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* SIGNATURE DISHES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          Nasze flagowe burgery
        </h2>

        <div className="mt-12 grid gap-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src="/images/royal-vegas.jpg"
                alt="Royal Vegas burger"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute -bottom-3 -left-3 rounded-sm bg-ember px-4 py-2 font-display text-cream">
                29,99 zł
              </span>
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-ember">
                BESTSELLER
              </p>
              <h3 className="mt-2 font-display text-3xl text-ink">Royal Vegas</h3>
              <p className="mt-3 max-w-md text-ink/70">
                Sałata lodowa, rukola, chrupiące polędwiczki, żurawina, ser
                camembert, ogórek burgerowy i autorski sos. Słodycz żurawiny
                spotyka się tu z kremowym camembertem.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="font-display text-sm tracking-[0.3em] text-ember">
                DLA ODWAŻNYCH
              </p>
              <h3 className="mt-2 font-display text-3xl text-ink">Spicy Vegas</h3>
              <p className="mt-3 max-w-md text-ink/70">
                Podwójny cheddar, cebula czerwona, papryczki jalapeño,
                chrupiące polędwiczki, pomidor, autorski sos i sriracha mayo.
                Dla tych, którzy lubią, gdy robi się ostro.
              </p>
            </div>
            <div className="relative order-1 h-64 w-full sm:h-80 md:order-2">
              <Image
                src="/images/hero-burger.jpg"
                alt="Spicy Vegas burger"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute -bottom-3 -right-3 rounded-sm bg-ember px-4 py-2 font-display text-cream">
                29,99 zł
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-sm bg-ink px-6 py-3 font-display tracking-wide text-cream transition hover:bg-ember"
          >
            Całe menu →
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-char py-20 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-4xl sm:text-5xl">
            Poczuj <span className="text-gold">różnicę</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-gold pl-4">
                <p className="font-display text-lg text-gold">{r.title}</p>
                <p className="mt-2 text-sm text-cream/70">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Zobacz co u nas
          </h2>
          <Link
            href="/galeria"
            className="hidden font-display tracking-wide text-ember hover:text-ink sm:block"
          >
            Cała galeria →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: "/images/zapiekanka.jpg", alt: "Zapiekanka na świeżej bagietce" },
            { src: "/images/hotdog-jalapeno.jpg", alt: "Hot-dog z jalapeño" },
            { src: "/images/chicken-fries.jpg", alt: "Panierowany kurczak z frytkami" },
            { src: "/images/wings-sauce.jpg", alt: "Skrzydełka w panierce" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <Link
          href="/galeria"
          className="mt-8 block text-center font-display tracking-wide text-ember hover:text-ink sm:hidden"
        >
          Cała galeria →
        </Link>
      </section>

      {/* HOURS / LOCATION CTA */}
      <section className="bg-gold">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Wpadaj do nas
            </h2>
            <p className="mt-3 text-ink/80">
              Bar Vegas, {contact.city}. Zadzwoń i zamów na wynos.
            </p>
            <a
              href={contact.phoneHref}
              className="mt-6 inline-block rounded-sm bg-ink px-6 py-3 font-display tracking-wide text-cream transition hover:bg-char"
            >
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="font-display text-lg text-ink">Godziny otwarcia</p>
            <ul className="mt-3 space-y-1 text-ink/80">
              {hours.map((h) => (
                <li key={h.day} className="flex max-w-xs justify-between gap-6">
                  <span>{h.day}</span>
                  <span className={h.hours === "Zamknięte" ? "text-ink/40" : "font-semibold"}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galeria | Bar Vegas Skoki",
  description: "Zobacz nasze burgery, hot-dogi, zapiekanki i skrzydełka z bliska.",
};

const photos = [
  { src: "/images/hero-burger.jpg", alt: "Chrupiący kurczak burger" },
  { src: "/images/zapiekanka.jpg", alt: "Zapiekanka na świeżej bagietce" },
  { src: "/images/hotdog-jalapeno.jpg", alt: "Hot-dog z jalapeño i salami" },
  { src: "/images/chicken-fries.jpg", alt: "Panierowany kurczak z frytkami" },
  { src: "/images/hotdog-colorful.jpg", alt: "Hot-dog z czerwoną kapustą" },
  { src: "/images/wings-sauce.jpg", alt: "Skrzydełka w chrupiącej panierce" },
  { src: "/images/pizza-baguette.jpg", alt: "Zapiekanka z salami i bekonem" },
];

export default function GaleriaPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-display text-sm tracking-[0.3em] text-ember">
        BAR VEGAS
      </p>
      <h1 className="mt-3 font-display text-5xl text-ink sm:text-6xl">
        Galeria
      </h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Świeże składniki, chrupiąca panierka i autorskie sosy — zobacz, co
        wychodzi z naszej kuchni.
      </p>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((p) => (
          <div key={p.src} className="relative overflow-hidden break-inside-avoid">
            <Image
              src={p.src}
              alt={p.alt}
              width={800}
              height={600}
              className="w-full object-cover transition duration-300 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

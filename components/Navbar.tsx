"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact } from "@/lib/menu-data";

const links = [
  { href: "/", label: "Start" },
  { href: "/menu", label: "Menu" },
  { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Bar Vegas"
            width={48}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-xl tracking-wide text-gold">
            BAR VEGAS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm uppercase tracking-widest text-cream/90 transition hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.phoneHref}
            className="rounded-sm bg-gold px-4 py-2 font-display text-sm tracking-wide text-ink transition hover:bg-cream"
          >
            {contact.phone}
          </a>
        </nav>

        <button
          aria-label="Otwórz menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-cream/10 bg-ink px-5 pb-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-lg tracking-wide text-cream border-b border-cream/10"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.phoneHref}
            className="mt-4 rounded-sm bg-gold px-4 py-3 text-center font-display tracking-wide text-ink"
          >
            Zadzwoń: {contact.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

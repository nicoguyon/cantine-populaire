"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#cuisine",   label: "Notre cuisine" },
  { href: "#menu",      label: "Menu du jour" },
  { href: "#equipe",    label: "L'équipe" },
  { href: "#traiteur",  label: "Traiteur" },
  { href: "#infos",     label: "Infos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-cream/80 border-b border-sage/20 shadow-sm py-3"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex flex-col leading-none">
          <span className="font-serif text-xl text-charcoal">Cantine</span>
          <span className="font-serif text-xl text-sage italic">Populaire</span>
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm font-medium text-charcoal/70 hover:text-sage transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+33147393839"
          className="hidden md:inline-flex items-center gap-2 bg-sage text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-sage/90 transition-colors duration-200"
        >
          <span>📞</span>
          <span>01 47 39 38 39</span>
        </a>
      </div>
    </header>
  );
}

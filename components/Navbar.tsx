"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#cuisine",  label: "Cuisine" },
  { href: "#menu",     label: "Menu" },
  { href: "#equipe",   label: "L'équipe" },
  { href: "#traiteur", label: "Traiteur" },
  { href: "#infos",    label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "navbar-glass py-3 shadow-sm"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ─── LOGO ─── */}
          <Link
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2 group select-none"
            aria-label="Cantine Populaire – accueil"
          >
            <Image
              src="/images/cantine-logo.svg"
              alt="Cantine Populaire"
              width={48}
              height={48}
              className={`h-10 w-10 md:h-12 md:w-12 transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-chalk text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
                style={{ lineHeight: 1.1 }}
              >
                Cantine
              </span>
              <span
                className={`font-chalk text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-sage" : "text-white"
                }`}
                style={{ lineHeight: 1.1 }}
              >
                Populaire
              </span>
            </div>
          </Link>

          {/* ─── DESKTOP NAV ─── */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-chalk text-lg transition-colors duration-200 hover:text-sage ${
                  scrolled ? "text-charcoal/80" : "text-cream/90"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ─── DESKTOP CTA ─── */}
          <a
            href="tel:+33147393839"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-sage text-cream hover:bg-sage/90"
                : "bg-cream/15 text-cream border border-cream/30 hover:bg-cream/25 backdrop-blur-sm"
            }`}
          >
            <span>📞</span>
            <span>01 47 39 38 39</span>
          </a>

          {/* ─── HAMBURGER (mobile) ─── */}
          <button
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 z-[60] ${
              menuOpen
                ? "bg-sage/20"
                : scrolled
                ? "hover:bg-sage/10"
                : "hover:bg-cream/15"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {/* Burger / X lines */}
            <span className="relative w-6 h-[18px] flex flex-col justify-between">
              <span
                className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                  menuOpen
                    ? "bg-charcoal rotate-45 translate-y-[8px]"
                    : scrolled
                    ? "bg-charcoal"
                    : "bg-cream"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : scrolled ? "bg-charcoal" : "bg-cream"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                  menuOpen
                    ? "bg-charcoal -rotate-45 -translate-y-[8px]"
                    : scrolled
                    ? "bg-charcoal"
                    : "bg-cream"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ─── MOBILE MENU OVERLAY ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(139, 157, 119, 0.18)",
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        }}
        onClick={closeMenu}
      />

      <nav
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden w-72 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(250, 248, 245, 0.92)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          borderLeft: "1px solid rgba(44,62,107,0.2)",
        }}
        aria-label="Menu mobile"
      >
        <div className="pt-24 px-8 flex flex-col gap-2 flex-1">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="font-chalk text-3xl text-charcoal/80 hover:text-sage transition-all duration-200 py-3 border-b border-sage/10 last:border-0"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.2s ease`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="px-8 py-8 border-t border-sage/15">
          <a
            href="tel:+33147393839"
            className="flex items-center gap-3 bg-sage text-cream rounded-2xl px-5 py-4 font-sans font-medium text-sm"
          >
            <span>📞</span>
            <div>
              <div className="text-cream/60 text-xs mb-0.5">Nous appeler</div>
              <div>01 47 39 38 39</div>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}

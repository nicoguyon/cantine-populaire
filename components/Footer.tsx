"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-cream overflow-hidden">
      {/* Organic wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none" style={{ height: "55px" }}>
          <path d="M0,20 C360,65 1080,0 1440,40 L1440,70 L0,70 Z" fill="#2C2C2C" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none" style={{ height: "55px" }}>
          <path d="M0,20 C360,65 1080,0 1440,40 L1440,70 L0,70 Z" fill="#FAF8F5" />
        </svg>
      </div>

      {/* Dot decoration */}
      <div className="absolute right-8 top-16 opacity-5 hidden lg:grid grid-cols-8 gap-4">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-cream" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <div className="font-serif text-3xl leading-tight mb-2">
                Cantine<br />
                <span className="text-sage italic">Populaire</span>
              </div>
              <p className="font-sans text-cream/50 text-sm leading-relaxed mt-3 max-w-xs">
                Fait maison, fait avec cœur,{" "}
                <span className="text-cream/75">fait pour toi.</span>
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/cantinepopulaire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-lg hover:border-sage hover:bg-sage/10 transition-all duration-200"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="tel:+33147393839"
                className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-lg hover:border-sage hover:bg-sage/10 transition-all duration-200"
                aria-label="Téléphone"
              >
                📞
              </a>
              <a
                href="https://maps.google.com/?q=21+Rue+Henri+Barbusse,+92110+Clichy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-lg hover:border-sage hover:bg-sage/10 transition-all duration-200"
                aria-label="Adresse"
              >
                📍
              </a>
            </div>
          </div>

          {/* Liens */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs text-cream/40 tracking-widest uppercase mb-5">
              Navigation
            </h4>
            {[
              { href: "#cuisine", label: "Notre cuisine" },
              { href: "#menu", label: "Menu du jour" },
              { href: "#equipe", label: "L'équipe" },
              { href: "#traiteur", label: "Traiteur" },
              { href: "#infos", label: "Infos pratiques" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block font-sans text-sm text-cream/60 hover:text-sage transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Horaires recap */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs text-cream/40 tracking-widest uppercase mb-5">
              Horaires
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between font-sans text-sm">
                <span className="text-cream/60">Lun – Ven</span>
                <span className="text-cream/80">12h – 14h30</span>
              </div>
              <div className="flex justify-between font-sans text-sm">
                <span className="text-cream/60">Sam & Dim</span>
                <span className="text-wood italic text-xs self-center">Traiteur uniquement</span>
              </div>
            </div>
            <div className="pt-4 border-t border-cream/10">
              <p className="font-sans text-xs text-cream/40">
                21 Rue Henri Barbusse
                <br />
                92110 Clichy
              </p>
              <a
                href="tel:+33147393839"
                className="block font-sans text-sm text-cream/60 hover:text-sage transition-colors duration-200 mt-2"
              >
                01 47 39 38 39
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/30">
            © {year} Cantine Populaire · 21 Rue Henri Barbusse, 92110 Clichy
          </p>
          <div className="flex items-center gap-3">
            <span className="text-cream/20 text-xs font-sans">★ 4,5/5</span>
            <span className="text-cream/15 text-xs font-sans">·</span>
            <span className="text-cream/20 text-xs font-sans">Tripadvisor</span>
          </div>
          <p className="font-sans text-xs text-cream/20 italic">
            Fait avec 🌿 et beaucoup d'amour
          </p>
        </div>
      </div>
    </footer>
  );
}

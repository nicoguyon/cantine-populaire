"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const dietOptions = [
  { icon: "🌿", label: "Végétarien", desc: "Option au menu chaque jour" },
  { icon: "🌱", label: "Vegan", desc: "Sur demande, toujours possible" },
  { icon: "🌾", label: "Sans gluten", desc: "Nous adapter, on sait faire" },
  { icon: "🥛", label: "Sans lactose", desc: "Signalé à la commande" },
];

const hours = [
  { day: "Lundi", time: "12h00 – 14h30" },
  { day: "Mardi", time: "12h00 – 14h30" },
  { day: "Mercredi", time: "12h00 – 14h30" },
  { day: "Jeudi", time: "12h00 – 14h30" },
  { day: "Vendredi", time: "12h00 – 14h30" },
  { day: "Samedi", time: "Traiteur uniquement" },
  { day: "Dimanche", time: "Traiteur uniquement" },
];

const perks = [
  { icon: "♿", label: "Accessible fauteuil roulant" },
  { icon: "☀️", label: "Terrasse ensoleillée" },
  { icon: "⭐", label: "4,5 / 5 sur Tripadvisor" },
  { icon: "🅿️", label: "Parking à proximité" },
];

export default function InfosPratiques() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const today = new Date().getDay(); // 0=Sun, 1=Mon...

  return (
    <section
      id="infos"
      className="relative py-28 px-6 overflow-hidden bg-cream"
    >
      {/* Organic wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none" style={{ height: "55px" }}>
          <path d="M0,30 C480,70 960,5 1440,30 L1440,70 L0,70 Z" fill="#FAF8F5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto pt-10">
        {/* Heading */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-sage tracking-widest uppercase font-sans"
          >
            Venir nous voir
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal mt-4"
          >
            Infos pratiques
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ─── Column 1 : Adresse + Horaires ─── */}
          <div className="space-y-8 lg:col-span-1">
            {/* Adresse card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-sage/12"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center text-xl select-none">
                  📍
                </div>
                <h3 className="font-serif text-xl text-charcoal">Adresse</h3>
              </div>
              <address className="not-italic font-sans text-charcoal/70 leading-relaxed mb-4">
                <strong className="text-charcoal font-medium">Cantine Populaire</strong>
                <br />
                21 Rue Henri Barbusse
                <br />
                92110 Clichy
              </address>
              <a
                href="https://maps.google.com/?q=21+Rue+Henri+Barbusse,+92110+Clichy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage font-sans font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Ouvrir dans Maps →
              </a>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-sage/12 space-y-4"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center text-xl select-none">
                  📞
                </div>
                <h3 className="font-serif text-xl text-charcoal">Contact</h3>
              </div>
              <a
                href="tel:+33147393839"
                className="flex items-center gap-3 text-charcoal hover:text-sage transition-colors duration-200 font-sans"
              >
                <span className="text-sm font-medium">01 47 39 38 39</span>
              </a>
              <a
                href="https://instagram.com/cantinepopulaire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal hover:text-sage transition-colors duration-200 font-sans"
              >
                <span className="text-sm font-medium">@cantinepopulaire</span>
                <span className="text-xs text-charcoal/40">Instagram</span>
              </a>
            </motion.div>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {perks.map((p, i) => (
                <div
                  key={p.label}
                  className="bg-white/70 rounded-2xl p-4 border border-sage/10 flex flex-col gap-1.5"
                >
                  <span className="text-xl select-none">{p.icon}</span>
                  <span className="font-sans text-xs text-charcoal/65 leading-snug">
                    {p.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Column 2 : Horaires ─── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-sage/12 self-start"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 bg-sage/15 rounded-xl flex items-center justify-center text-xl select-none">
                🕛
              </div>
              <h3 className="font-serif text-xl text-charcoal">Horaires</h3>
            </div>
            <div className="space-y-3">
              {hours.map((h, i) => {
                // 1=Mon, 2=Tue ... 5=Fri; weekends=traiteur
                const dayIndex = i + 1; // 1..7
                const isToday = today === (dayIndex > 5 ? dayIndex - 5 + 5 : dayIndex) ||
                  (dayIndex === 6 && today === 6) ||
                  (dayIndex === 7 && today === 0);
                const isOpen = i < 5;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-3 border-b border-charcoal/6 last:border-0 ${isToday ? "font-semibold" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block flex-shrink-0" />
                      )}
                      <span className={`font-sans text-sm ${isToday ? "text-sage" : "text-charcoal/70"}`}>
                        {h.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] bg-sage/15 text-sage px-2 py-0.5 rounded-full">
                            Aujourd'hui
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-sans text-sm ${
                        isOpen
                          ? isToday
                            ? "text-sage font-semibold"
                            : "text-charcoal/70"
                          : "text-wood text-xs italic"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-mustard/10 border border-mustard/20">
              <p className="font-sans text-sm text-charcoal/70">
                <span className="font-semibold text-mustard">💶 Formule à ~15€</span>
                {" "}— Entrée + Plat + Dessert. Paiement CB et espèces.
              </p>
            </div>
          </motion.div>

          {/* ─── Column 3 : Map + diet ─── */}
          <div className="space-y-8">
            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-sage/12 aspect-[4/3]"
            >
              <iframe
                title="Cantine Populaire sur Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.1!2d2.3097!3d48.9072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665ffafef4a9b%3A0x3a4a1be2b3c1a2c0!2s21+Rue+Henri+Barbusse%2C+92110+Clichy!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Diet options */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-sage/12"
            >
              <h3 className="font-serif text-xl text-charcoal mb-6">
                Options alimentaires
              </h3>
              <div className="space-y-4">
                {dietOptions.map((d, i) => (
                  <div key={d.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-sage/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 select-none">
                      {d.icon}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-charcoal">
                        {d.label}
                      </p>
                      <p className="font-sans text-xs text-charcoal/50">{d.desc}</p>
                    </div>
                    <div className="ml-auto w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 10 10" className="w-3 h-3 fill-sage">
                        <path d="M1.5,5 L4,7.5 L8.5,2.5" stroke="#2C3E6B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

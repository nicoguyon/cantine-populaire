"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const menuPlaceholder = {
  date: "Aujourd'hui",
  entree: "Velouté de panais rôti, huile de noisette & ciboulette fraîche",
  plat: "Poulet fermier rôti aux herbes du jardin, écrasé de pommes de terre à l'ail & citron confit",
  plat_vege: "Risotto de champignons sauvages, parmesan affiné & truffe noire",
  dessert: "Tarte fine aux pommes Boskoop, crème fraîche maison & caramel beurre salé",
};

function ChalkLine({
  label,
  value,
  delay,
  inView,
  badge,
}: {
  label: string;
  value: string;
  delay: number;
  inView: boolean;
  badge?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="py-5 border-b border-white/10 last:border-0"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sage text-[10px] font-sans font-semibold tracking-[0.18em] uppercase">
          {label}
        </span>
        {badge && (
          <span className="bg-sage/25 text-sage text-[9px] font-sans font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
            {badge}
          </span>
        )}
      </div>
      <p className="font-serif text-lg md:text-xl text-cream/90 leading-snug">
        {value}
      </p>
    </motion.div>
  );
}

export default function MenuDuJour() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="menu"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f0e8 0%, #FAF8F5 100%)" }}
    >
      {/* Floating blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mustard/6 rounded-full -translate-y-1/4 translate-x-1/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/6 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-sage tracking-widest uppercase font-sans"
          >
            Chaque jour, une surprise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6"
          >
            L'ardoise du jour
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-sans text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            On n'a pas de carte. On a mieux que ça : un menu qui change tous
            les jours, selon le marché, selon l'humeur, selon la saison.{" "}
            <span className="text-charcoal/80 font-medium">
              C'est ça, la Cantine Populaire.
            </span>
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* ─── ARDOISE ─── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="ardoise rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Chalk header */}
            <div className="border-b border-white/10 px-8 pt-8 pb-6 text-center relative">
              {/* Chalk scribble decoration */}
              <svg viewBox="0 0 280 6" className="mx-auto mb-4 opacity-20" width="200">
                <path d="M0,3 C40,1 80,5 120,3 C160,1 200,5 240,3 C260,2 270,4 280,3" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
              <p className="text-white/40 text-[10px] font-sans tracking-[0.22em] uppercase mb-2">
                Menu du jour
              </p>
              <p className="ardoise-chalk font-serif text-2xl text-cream/90">
                {menuPlaceholder.date}
              </p>
              <svg viewBox="0 0 280 6" className="mx-auto mt-4 opacity-20" width="200">
                <path d="M0,3 C40,5 80,1 120,3 C160,5 200,1 240,3 C260,4 270,2 280,3" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>

            <div className="px-8 py-6">
              <ChalkLine label="Entrée" value={menuPlaceholder.entree} delay={0.35} inView={inView} />
              <ChalkLine label="Plat du jour" value={menuPlaceholder.plat} delay={0.45} inView={inView} />
              <ChalkLine label="Option végé" value={menuPlaceholder.plat_vege} delay={0.55} inView={inView} badge="🌿 Veggie" />
              <ChalkLine label="Dessert" value={menuPlaceholder.dessert} delay={0.65} inView={inView} />
            </div>

            {/* Price + tourte legend */}
            <div className="px-8 pb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.8, type: "spring", stiffness: 200 }}
                className="flex items-center justify-between bg-white/5 rounded-2xl px-6 py-4 border border-white/10"
              >
                <div>
                  <p className="text-white/40 text-[10px] font-sans uppercase tracking-widest mb-1">
                    Formule complète
                  </p>
                  <p className="ardoise-chalk font-serif text-cream/80 text-sm">
                    Entrée · Plat · Dessert
                  </p>
                </div>
                <span className="font-serif text-mustard text-4xl font-bold">
                  15€
                </span>
              </motion.div>

              {/* Tourte note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="text-white/30 text-xs font-sans mt-4 text-center italic"
              >
                ✨ La tourte d'Emilie — légendaire depuis 2018. Quand il y en a,
                il faut pas hésiter.
              </motion.p>
            </div>
          </motion.div>

          {/* ─── TEXT SIDE ─── */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif text-3xl text-charcoal mb-5 leading-snug">
                Le menu change chaque jour —{" "}
                <span className="text-sage italic">et c'est voulu.</span>
              </h3>
              <p className="font-sans text-charcoal/62 leading-relaxed text-base">
                Pas de carte figée. Pas de plat qui traîne depuis des semaines.
                On cuisine ce que le marché nous inspire, ce que la saison nous
                offre, ce qu'on a envie de partager. Le menu s'efface chaque
                soir. Demain, autre chose vous attend.
              </p>
            </motion.div>

            {/* Instagram CTA */}
            <motion.a
              href="https://instagram.com/cantinepopulaire"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-5 p-6 rounded-3xl border-2 border-dashed border-sage/30 bg-sage/5 hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-200">
                📲
              </div>
              <div>
                <p className="font-serif text-charcoal text-lg mb-1">
                  Le menu du jour en avant-première
                </p>
                <p className="font-sans text-charcoal/60 text-sm leading-snug">
                  Chaque matin, on publie le menu sur Instagram.{" "}
                  <span className="text-sage font-medium">
                    @cantinepopulaire →
                  </span>
                </p>
              </div>
            </motion.a>

            {/* Quick info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🕛", label: "Service midi", value: "12h – 14h30" },
                { icon: "📅", label: "Ouvert", value: "Lun – Ven" },
                { icon: "💶", label: "Formule", value: "~15€ complet" },
                { icon: "🌿", label: "Options", value: "Végé · Vegan · GF" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-sage/10 hover:border-sage/25 transition-colors duration-200"
                >
                  <span className="text-2xl block mb-2 select-none">{item.icon}</span>
                  <span className="block text-[10px] text-charcoal/45 font-sans uppercase tracking-widest mb-1">
                    {item.label}
                  </span>
                  <span className="block font-serif text-charcoal text-lg leading-tight">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#infos"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 text-sage font-sans font-medium text-sm group"
            >
              <span className="group-hover:mr-1 transition-all duration-200">
                Voir les infos pratiques
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Chalk SVG decorations ─────────────────────────────────── */
function ChalkStar({ x, y, size = 16, opacity = 0.18, rotate = 0 }: {
  x: number | string; y: number | string; size?: number; opacity?: number; rotate?: number;
}) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      className="absolute pointer-events-none"
      style={{ left: x, top: y, opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M12 2 L13.5 8.5 L20 7 L15.5 12 L20 17 L13.5 15.5 L12 22 L10.5 15.5 L4 17 L8.5 12 L4 7 L10.5 8.5 Z"
        stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round"
      />
    </svg>
  );
}

function ChalkLeaf({ x, y, size = 22, opacity = 0.15, rotate = 0 }: {
  x: number | string; y: number | string; size?: number; opacity?: number; rotate?: number;
}) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      className="absolute pointer-events-none"
      style={{ left: x, top: y, opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M12 22 C12 22 4 16 4 9 C4 5.7 7.1 3 12 3 C16.9 3 20 5.7 20 9 C20 16 12 22 12 22 Z"
        stroke="white" strokeWidth="1.2" fill="none"
      />
      <line x1="12" y1="22" x2="12" y2="7" stroke="white" strokeWidth="0.8" strokeDasharray="1.5,1.5" opacity="0.7" />
    </svg>
  );
}

function ChalkDot({ x, y, size = 4, opacity = 0.12 }: {
  x: number | string; y: number | string; size?: number; opacity?: number;
}) {
  return (
    <svg
      width={size * 2} height={size * 2}
      viewBox="0 0 8 8"
      className="absolute pointer-events-none"
      style={{ left: x, top: y, opacity }}
    >
      <circle cx="4" cy="4" r="3" stroke="white" strokeWidth="1" fill="white" opacity="0.4" />
    </svg>
  );
}

function ChalkWave({ y, opacity = 0.12 }: { y?: number; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 320 8"
      width="100%"
      className="block"
      style={{ opacity, marginTop: y }}
    >
      <path
        d="M0,4 C30,1.5 60,6.5 90,4 C120,1.5 150,6.5 180,4 C210,1.5 240,6.5 270,4 C290,2.5 305,5 320,4"
        stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Menu content ─────────────────────────────────────────── */
const menu = {
  entree: {
    title: "Velouté de butternut rôti",
    detail: "crème de coco, gingembre frais & graines de courge dorées",
  },
  plat: {
    title: "Poulet fermier rôti aux herbes de Provence",
    detail: "écrasé de pommes de terre à l'ail doux, jus de veau & citron confit",
  },
  plat_vege: {
    title: "Risotto de champignons sauvages",
    detail: "parmesan affiné 24 mois, huile de truffe & persil plat",
  },
  dessert: {
    title: "Tarte fine aux pommes Boskoop",
    detail: "crème fraîche battue à la vanille & caramel beurre salé maison",
  },
};

function ChalkCourse({
  label,
  course,
  delay,
  inView,
  badge,
}: {
  label: string;
  course: { title: string; detail: string };
  delay: number;
  inView: boolean;
  badge?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="py-4 border-b border-white/10 last:border-0"
    >
      <div className="flex items-center gap-3 mb-1.5">
        <span
          className="font-chalk text-mustard text-sm tracking-widest uppercase"
          style={{ textShadow: "0 0 8px rgba(212,168,67,0.4)" }}
        >
          — {label}
        </span>
        {badge && (
          <span className="bg-mustard/20 text-mustard font-chalk text-xs px-2 py-0.5 rounded-full border border-mustard/30">
            {badge}
          </span>
        )}
      </div>
      <p className="ardoise-chalk font-chalk text-lg md:text-xl leading-snug text-white">
        {course.title}
      </p>
      <p className="font-chalk text-sm text-white mt-0.5 italic">
        {course.detail}
      </p>
    </motion.div>
  );
}

/* ── Component ────────────────────────────────────────────── */
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
            Pas de carte figée. On cuisine ce que le marché nous inspire, ce que la saison offre,
            ce qu'on a envie de partager.{" "}
            <span className="text-charcoal/80 font-medium">
              Le menu s'efface chaque soir. Demain, autre chose vous attend.
            </span>
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* ─── ARDOISE ─── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ marginTop: "20px" }}
          >
            {/* "Menu du jour" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 1.5 } : {}}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              className="ardoise-badge"
              aria-label="Menu du jour"
            >
              📋 Menu du jour
            </motion.div>

            {/* Ardoise board */}
            <div className="ardoise" style={{ borderRadius: "20px", padding: "0" }}>
              {/* Chalk SVG decorations scattered on the board */}
              <div className="relative" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", borderRadius: "20px", zIndex: 1 }}>
                <ChalkStar x={18}  y={22}  size={14} opacity={0.15} rotate={15} />
                <ChalkStar x="92%" y={30}  size={10} opacity={0.12} rotate={-10} />
                <ChalkLeaf x={12}  y="70%" size={20} opacity={0.13} rotate={25} />
                <ChalkLeaf x="88%" y="55%" size={18} opacity={0.11} rotate={-40} />
                <ChalkStar x="85%" y="80%" size={12} opacity={0.10} rotate={30} />
                <ChalkDot  x={35}  y="88%" size={3}  opacity={0.18} />
                <ChalkDot  x="78%" y={15}  size={4}  opacity={0.14} />
                <ChalkDot  x="60%" y="92%" size={3}  opacity={0.12} />
              </div>

              {/* Header */}
              <div className="relative z-10 border-b border-white/10 px-8 pt-10 pb-6 text-center">
                <ChalkWave opacity={0.15} />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="font-chalk text-white text-xs tracking-[0.28em] uppercase mb-3 mt-2"
                >
                  ✦ La Cantine Populaire ✦
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.45, duration: 0.5 }}
                >
                  <p className="ardoise-chalk font-chalk text-3xl md:text-4xl mb-1">
                    L'Ardoise
                  </p>
                  <p className="font-chalk text-white text-base tracking-wide">
                    Aujourd'hui
                  </p>
                </motion.div>

                <ChalkWave opacity={0.12} y={8} />
              </div>

              {/* Menu courses */}
              <div className="relative z-10 px-8 py-4">
                <ChalkCourse
                  label="Entrée"
                  course={menu.entree}
                  delay={0.35}
                  inView={inView}
                />
                <ChalkCourse
                  label="Plat du jour"
                  course={menu.plat}
                  delay={0.45}
                  inView={inView}
                />
                <ChalkCourse
                  label="Option végé"
                  course={menu.plat_vege}
                  delay={0.55}
                  inView={inView}
                  badge="🌿 Veggie"
                />
                <ChalkCourse
                  label="Dessert"
                  course={menu.dessert}
                  delay={0.65}
                  inView={inView}
                />
              </div>

              {/* Footer price */}
              <div className="relative z-10 px-8 pb-8 pt-2">
                <ChalkWave opacity={0.10} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.8, type: "spring", stiffness: 200 }}
                  className="flex items-center justify-between mt-4 bg-white/[0.04] rounded-2xl px-6 py-4 border border-white/[0.08]"
                  style={{ backdropFilter: "blur(4px)" }}
                >
                  <div>
                    <p className="font-chalk text-white text-xs uppercase tracking-widest mb-1">
                      Formule complète
                    </p>
                    <p className="ardoise-chalk font-chalk text-base">
                      Entrée · Plat · Dessert
                    </p>
                  </div>
                  <span className="font-chalk text-mustard text-5xl font-bold"
                    style={{ textShadow: "0 0 20px rgba(212,168,67,0.3)" }}>
                    15€
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="font-chalk text-white text-sm mt-4 text-center italic"
                >
                  ✨ La tourte d'Emilie — légendaire depuis 2018
                </motion.p>
              </div>
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

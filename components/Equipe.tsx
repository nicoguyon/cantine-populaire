"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Equipe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="equipe"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(155deg, #eef2e8 0%, #f8f4ee 60%, #FAF8F5 100%)" }}
    >
      {/* Organic wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="#FAF8F5" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-32 right-8 w-72 h-72 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-56 h-56 bg-wood/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-10">
        {/* Heading */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-sage tracking-widest uppercase font-sans"
          >
            Derrière les fourneaux
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal mt-4"
          >
            Augustin & Emilie
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ─── Image side ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/images/cantine-team.webp"
                alt="Augustin et Emilie, fondateurs de la Cantine Populaire"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
            </div>

            {/* Floating year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: -8 } : {}}
              transition={{ duration: 0.6, delay: 0.65, type: "spring", stiffness: 180 }}
              className="absolute -bottom-7 -right-5 md:-right-8 bg-cream rounded-2xl px-6 py-4 shadow-xl border border-sage/10"
            >
              <div className="font-serif text-4xl text-charcoal leading-none">2018</div>
              <div className="font-sans text-xs text-charcoal/45 mt-1.5">On ouvre les portes 🚪</div>
            </motion.div>

            {/* Small floating quote */}
            <motion.div
              initial={{ opacity: 0, y: -16, x: 16 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="absolute -top-5 -left-5 md:-left-8 bg-sage text-cream rounded-2xl px-5 py-3.5 shadow-lg max-w-[180px] hidden md:block"
            >
              <p className="font-serif text-sm italic leading-snug">
                "Cuisiner, c'est notre façon d'être généreux."
              </p>
            </motion.div>
          </motion.div>

          {/* ─── Text side ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Big quote */}
            <blockquote className="relative pl-6">
              <span
                className="absolute -top-5 -left-2 font-serif text-[90px] text-sage/20 leading-none select-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed italic">
                Tout a commencé comme souvent dans les meilleures histoires : autour d'une table.
              </p>
            </blockquote>

            <div className="space-y-5 font-sans text-charcoal/65 leading-relaxed text-base">
              <p>
                Frère et sœur, Augustin et Emilie ont grandi dans une famille
                où les repas duraient des heures. La cuisine de leur mère était
                une science inexacte et merveilleuse : des produits du marché,
                des recettes transmises de mémoire, un four qui chauffe inégalement
                mais des plats qui réussissent toujours.
              </p>
              <p>
                En 2018, ils ont troqué leurs bureaux parisiens contre des tabliers
                et ont ouvert la Cantine Populaire rue Henri Barbusse à Clichy.
                Pas de formation culinaire officielle — juste des années à observer,
                à goûter, à rater, à recommencer. Et surtout, une conviction :
                bien manger ne devrait pas être un luxe.
              </p>
              <p>
                Sept ans plus tard, les habitués sont devenus des amis, et la
                cantine est devenue un peu le salon de Clichy.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: "7 ans", label: "d'aventure" },
                { value: "500+", label: "repas / semaine" },
                { value: "100%", label: "fait maison" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.65 + i * 0.12 }}
                  className="text-center p-4 rounded-2xl bg-cream/70 border border-sage/12 backdrop-blur-sm"
                >
                  <div className="font-serif text-2xl text-sage">{stat.value}</div>
                  <div className="font-sans text-[11px] text-charcoal/50 mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Instagram link */}
            <motion.a
              href="https://instagram.com/cantinepopulaire"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-3 text-charcoal/75 font-sans font-medium text-sm hover:text-sage transition-colors duration-200 group"
            >
              <span className="text-xl">📸</span>
              <span>
                Suivez l'aventure ·{" "}
                <span className="underline decoration-sage/40 underline-offset-2 group-hover:decoration-sage transition-all duration-200">
                  @cantinepopulaire
                </span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Organic wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,25 C360,70 1080,0 1440,45 L1440,70 L0,70 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  );
}

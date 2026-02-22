"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const formules = [
  {
    emoji: "🥡",
    title: "Plateaux repas",
    desc: "Idéal pour vos déjeuners d'équipe. Entrée + plat + dessert, tout emballé avec soin. Livraison ou retrait sur place.",
    tag: "À partir de 18€/pers",
    color: "border-sage/25 hover:border-sage/50 hover:shadow-sage/10",
    tagColor: "bg-sage/12 text-sage",
  },
  {
    emoji: "🫒",
    title: "Finger food & cocktails",
    desc: "Verrines, mini-sandwichs maison, bouchées chaudes, mezze. Pour vos apéros et cocktails dinatoires, petits ou grands.",
    tag: "À partir de 25€/pers",
    color: "border-wood/25 hover:border-wood/50 hover:shadow-wood/10",
    tagColor: "bg-wood/12 text-wood",
  },
  {
    emoji: "🫕",
    title: "Cocottes & buffets",
    desc: "Des plats généreux à partager, en cocotte ou en grand plat familial. Idéal pour les séminaires et repas de groupe.",
    tag: "Sur devis",
    color: "border-mustard/25 hover:border-mustard/50 hover:shadow-mustard/10",
    tagColor: "bg-mustard/12 text-mustard",
  },
];

export default function Traiteur() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${(-y / rect.height) * 10}deg) rotateY(${(x / rect.width) * 10}deg) translateZ(5px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
  };

  return (
    <section id="traiteur" className="relative py-28 px-6 overflow-hidden bg-cream">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wood/8 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/6 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-sage tracking-widest uppercase font-sans"
          >
            En dehors du déjeuner
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6"
          >
            Service traiteur
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-sans text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Tu organises un repas d'entreprise, un anniversaire, une soirée entre amis ?
            La Cantine Populaire se déplace — ou t'accueille les portes fermées, rien que
            pour toi.
          </motion.p>
        </div>

        {/* Image + formules layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-14">
          {/* Formules cards */}
          <div className="lg:col-span-3 space-y-5">
            {formules.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ transition: "transform 0.15s ease, box-shadow 0.2s ease" }}
                className={`flex gap-6 p-6 rounded-3xl border bg-white/60 backdrop-blur-sm ${f.color} hover:shadow-xl group`}
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-cream flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform duration-200 select-none">
                  {f.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="font-serif text-xl text-charcoal">{f.title}</h3>
                    <span className={`text-xs font-semibold font-sans px-3 py-1.5 rounded-full flex-shrink-0 ${f.tagColor}`}>
                      {f.tag}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Privatisation note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.7 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-dashed border-charcoal/15 bg-cream/50"
            >
              <span className="text-3xl select-none">🏡</span>
              <div>
                <p className="font-serif text-charcoal text-base mb-1">Privatisation possible</p>
                <p className="font-sans text-charcoal/55 text-sm">
                  Anniversaires, séminaires, dîners privés. On peut fermer la
                  cantine rien que pour vous — avec le même soin qu'au déjeuner.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 sticky top-28"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
              <Image
                src="/images/cantine-traiteur.webp"
                alt="Traiteur Cantine Populaire"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-cream/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <p className="font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-1.5">
                    Service traiteur
                  </p>
                  <p className="font-serif text-charcoal text-lg leading-snug">
                    Disponible le samedi & dimanche
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-charcoal text-cream"
        >
          {/* Subtle bg texture */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/cantine-food.webp"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          {/* Dot pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-64 opacity-[0.07] hidden md:flex items-center justify-end pr-8">
            <div className="grid grid-cols-7 gap-3.5">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-cream" />
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between p-10 md:p-14">
            <div className="max-w-lg">
              <p className="text-sage text-xs font-sans tracking-widest uppercase mb-3">
                Un projet en tête ?
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-snug">
                Parlez-nous de votre événement.
              </h3>
              <p className="font-sans text-cream/65 text-base leading-relaxed">
                Augustin et Emilie vous feront une proposition sur mesure — avec
                le même soin et la même générosité qu'à la cantine.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3 items-center">
              <a
                href="tel:+33147393839"
                className="shimmer-btn font-sans font-semibold text-charcoal px-9 py-4 rounded-full text-base whitespace-nowrap"
              >
                Nous appeler →
              </a>
              <span className="font-sans text-cream/40 text-xs">
                01 47 39 38 39
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

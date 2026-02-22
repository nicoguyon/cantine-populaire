"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    emoji: "🌿",
    title: "100% fait maison",
    desc: "Chaque plat est cuisiné le matin même. Bouillons maison, sauces du jour, desserts préparés avec soin. Ici, le congélateur ne sert à rien.",
    color: "bg-sage/10 border-sage/20",
    accent: "text-sage",
    glow: "group-hover:shadow-sage/15",
  },
  {
    emoji: "🥕",
    title: "Produits frais, locaux & fermiers",
    desc: "On travaille avec des maraîchers de la région, un boucher de confiance et un poissonnard qu'on appelle par son prénom. Le marché dicte notre carte.",
    color: "bg-wood/10 border-wood/20",
    accent: "text-wood",
    glow: "group-hover:shadow-wood/15",
  },
  {
    emoji: "🌾",
    title: "Recettes de saison",
    desc: "En hiver, des cocottes qui réchauffent. Au printemps, des assiettes qui sentent le jardin. Notre menu suit le soleil — et vos papilles avec.",
    color: "bg-mustard/10 border-mustard/20",
    accent: "text-mustard",
    glow: "group-hover:shadow-mustard/15",
  },
  {
    emoji: "🫙",
    title: "Végé, vegan & sans gluten",
    desc: "Chaque jour, une option végétarienne et une alternative vegan. Sur demande, on s'adapte. La table est ouverte à tout le monde.",
    color: "bg-sage/8 border-sage/15",
    accent: "text-sage",
    glow: "group-hover:shadow-sage/10",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(900px) rotateX(${(-y / rect.height) * 11}deg) rotateY(${(x / rect.width) * 11}deg) translateZ(8px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
      className={`group ${className}`}
    >
      {children}
    </div>
  );
}

export default function NotreCuisine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="cuisine" className="relative py-28 px-6 bg-cream overflow-hidden">
      {/* Subtle bg circles */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-wood/8 rounded-full blur-3xl pointer-events-none" />

      {/* Organic separator top */}
      <div className="flex justify-center mb-20">
        <svg viewBox="0 0 160 28" width="140" className="overflow-visible">
          <path d="M0,14 Q40,2 80,14 Q120,26 160,14" stroke="#8B9D77" strokeWidth="1.5" fill="none" strokeOpacity="0.35"/>
          <path d="M20,14 Q60,24 100,14 Q130,6 160,14" stroke="#8B9D77" strokeWidth="0.8" fill="none" strokeOpacity="0.18"/>
          <circle cx="80" cy="14" r="3.5" fill="#8B9D77" fillOpacity="0.4"/>
          <circle cx="30" cy="9" r="2" fill="#8B9D77" fillOpacity="0.25"/>
          <circle cx="130" cy="18" r="2" fill="#8B9D77" fillOpacity="0.25"/>
          {/* little leaf */}
          <path d="M78,6 Q84,10 80,14 Q76,10 78,6 Z" fill="#8B9D77" fillOpacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-sage tracking-widest uppercase font-sans"
          >
            Notre philosophie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6"
          >
            On ne réinvente rien.
            <br />
            <span className="text-sage italic">On fait juste les choses correctement.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-sans text-charcoal/60 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Pas de moléculaire, pas de tendance, pas d'esbroufe. Juste de bons
            produits, cuisinés avec application, servis avec le sourire.
          </motion.p>
        </div>

        {/* Food image + cards layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 sticky top-28"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
              <Image
                src="/images/cantine-food.webp"
                alt="Cuisine fait maison Cantine Populaire"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-cream/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <p className="font-serif text-lg text-charcoal leading-snug">
                    "Ce qu'on te sert, c'est ce qu'on mangerait nous-mêmes."
                  </p>
                  <p className="font-sans text-xs text-charcoal/50 mt-2">— Augustin</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right pillars column */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 48 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.25 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard
                  className={`rounded-3xl border p-7 ${p.color} hover:shadow-2xl ${p.glow} h-full`}
                >
                  <div className="text-4xl mb-5 select-none">{p.emoji}</div>
                  <h3 className={`font-serif text-xl mb-3 ${p.accent}`}>{p.title}</h3>
                  <p className="font-sans text-charcoal/62 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaf separator bottom */}
      <div className="mt-24 flex justify-center gap-4 opacity-15 select-none">
        <span className="text-3xl">🍃</span>
        <span className="text-3xl" style={{ transform: "scaleX(-1)" }}>🌿</span>
        <span className="text-3xl">🍃</span>
      </div>
    </section>
  );
}

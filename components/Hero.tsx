"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onScroll = () => {
      wrap.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shadowText = { textShadow: "0 2px 20px rgba(0,0,0,0.7)" } as const;

  return (
    <section className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden">

      {/* Parallax image */}
      <div ref={wrapRef} className="absolute inset-[-18%] will-change-transform">
        <Image
          src="/images/cantine-hero.webp"
          alt="La Cantine Populaire, Clichy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — fort en bas, léger en haut */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Badge — en haut */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
      >
        <span
          className="text-white text-xs font-sans tracking-widest uppercase opacity-80"
          style={shadowText}
        >
          ★ 4.5/5 Tripadvisor · Depuis 2018 · Clichy
        </span>
      </motion.div>

      {/* Content — ancré en bas */}
      <div className="relative z-10 px-6 pb-20 max-w-4xl mx-auto w-full">

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-chalk text-6xl md:text-8xl text-white leading-tight mb-3"
          style={shadowText}
        >
          Ici, on mange comme à la maison.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans italic text-white text-2xl md:text-3xl mb-6 opacity-90"
          style={shadowText}
        >
          En mieux.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans text-white text-base md:text-lg max-w-xl mb-10 leading-relaxed opacity-85"
          style={shadowText}
        >
          Augustin et Emilie cuisinent chaque matin ce qu&apos;ils ont envie de te
          servir le midi. Frais. Fait maison. Généreux.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <a
            href="#menu"
            className="inline-block bg-mustard text-white font-sans font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:brightness-110 transition-all duration-200"
          >
            Découvrir le menu ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-white opacity-50 text-lg leading-none"
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
}

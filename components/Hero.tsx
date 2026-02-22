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

  const shadowText = { textShadow: "0 3px 18px rgba(0,0,0,0.75)" } as const;

  return (
    <section className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden">

      {/* Parallax image */}
      <div ref={wrapRef} className="absolute inset-[-18%] will-change-transform">
        <Image
          src="/images/cantine-hero-v2.webp"
          alt="La Cantine Populaire, Clichy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — assombrit UNIQUEMENT le bas, image visible en haut */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Badge Tripadvisor — SOUS la navbar, petit */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-20 left-1/2 -translate-x-1/2 z-10"
      >
        <span
          className="text-white/80 text-[11px] font-sans tracking-widest uppercase"
          style={shadowText}
        >
          ★ 4.5/5 Tripadvisor · Depuis 2018 · Clichy
        </span>
      </motion.div>

      {/* Content — ancré en bas, bien en dessous du titre du logo */}
      <div className="relative z-10 px-6 pb-24 pt-32 max-w-4xl mx-auto w-full">

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-chalk text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-3"
          style={shadowText}
        >
          Ici, on mange comme à la maison.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans italic text-white text-xl md:text-2xl mb-6"
          style={shadowText}
        >
          En mieux.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans text-white/90 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={shadowText}
        >
          Augustin et Emilie cuisinent chaque matin ce qu&apos;ils ont envie de te
          servir le midi. Frais. Fait maison. Généreux.
        </motion.p>

        {/* CTA — fond moutarde garanti via inline style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <a
            href="#menu"
            className="inline-block font-sans font-semibold text-base px-8 py-4 rounded-full shadow-xl hover:brightness-110 transition-all duration-200"
            style={{ backgroundColor: "#D4A843", color: "#1A1A1A" }}
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
          className="text-white opacity-40 text-lg leading-none"
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
}

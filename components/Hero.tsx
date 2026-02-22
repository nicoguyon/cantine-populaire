"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const titleWords = ["Ici, on mange", "comme à la maison.", "En mieux."];

function WordReveal({ line, delay = 0 }: { line: string; delay?: number }) {
  const words = line.split(" ");
  return (
    <span className="block overflow-hidden leading-tight">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.85,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

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

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Parallax image */}
      <div
        ref={wrapRef}
        className="absolute inset-[-18%] will-change-transform"
      >
        <Image
          src="/images/cantine-hero.webp"
          alt="La Cantine Populaire, Clichy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

      {/* Organic bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 90"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "80px" }}
        >
          <path
            d="M0,45 C240,85 480,10 720,50 C960,90 1200,20 1440,45 L1440,90 L0,90 Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/25 text-cream/90 text-xs font-medium font-sans px-5 py-2.5 rounded-full mb-10 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
          Clichy · Depuis 2018 · Fait maison
        </motion.div>

        {/* Title — word reveal */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-8"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)' }}
        >
          {titleWords.map((line, i) => (
            <WordReveal
              key={i}
              line={line}
              delay={0.35 + i * 0.22}
            />
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="font-sans text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 4px 24px rgba(0,0,0,0.4)' }}
        >
          Augustin et Emilie cuisinent chaque matin ce qu'ils ont envie de te
          servir le midi. Frais. Fait maison. Généreux.{" "}
          <span className="text-mustard font-medium">À 15€ tout compris.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="shimmer-btn font-sans font-semibold text-charcoal text-base px-9 py-4 rounded-full shadow-xl"
          >
            Découvrir le menu →
          </a>
          <a
            href="#infos"
            className="border border-cream/40 text-cream font-sans text-base px-8 py-4 rounded-full hover:bg-cream/10 transition-all duration-250 backdrop-blur-sm"
          >
            Nous trouver
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cream/35 text-[10px] tracking-[0.2em] uppercase font-sans">
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-cream/35 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

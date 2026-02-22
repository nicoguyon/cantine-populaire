"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  return (
    <section
      id="reel"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "#1a1a1a" }}
    >
      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-sage tracking-widest uppercase font-sans"
          >
            En images
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-5"
          >
            Notre Reel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-sans text-cream/50 text-lg max-w-xl mx-auto leading-relaxed"
          >
            La cantine en mouvement — les coulisses, les plats, les gens.
          </motion.p>
        </div>

        {/* Video 9:16 — centré, max-height 70vh sur desktop */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <video
            src="/videos/cantine-populaire-reel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl object-cover"
            style={{
              aspectRatio: "9/16",
              maxHeight: "70vh",
              width: "auto",
              display: "block",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
            }}
          />
        </motion.div>

        {/* Below player */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-center"
        >
          <a
            href="https://instagram.com/cantinepopulaire"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-sans text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(245,240,232,0.8)",
            }}
          >
            <span className="text-lg">📸</span>
            Suivre sur Instagram
          </a>

          <span className="text-cream/20 font-sans text-sm hidden sm:block">·</span>

          <p className="font-sans text-cream/35 text-sm">
            Filmé &amp; monté avec amour, comme on cuisine 🎞️
          </p>
        </motion.div>
      </div>
    </section>
  );
}

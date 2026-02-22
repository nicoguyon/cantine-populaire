"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoReel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="reel"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #141824 0%, #1a2035 50%, #111520 100%)",
      }}
    >
      {/* Grain overlay for this dark section */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Sage glow blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sage/10 rounded-full -translate-y-1/2 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-mustard/8 rounded-full -translate-y-1/2 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
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

        {/* Video player placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
          style={{ maxWidth: "860px" }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-1 rounded-3xl opacity-40 blur-md transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(44, 62, 107,0.5) 0%, rgba(212,168,67,0.3) 100%)",
              opacity: hovered ? 0.6 : 0.3,
            }}
          />

          {/* Player container */}
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10"
            style={{
              background: "linear-gradient(145deg, #161c2e 0%, #0f1520 100%)",
              aspectRatio: "16/9",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Film grain on the player */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "150px",
              }}
            />

            {/* Vignette overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)",
              }}
            />

            {/* Progress bar (decorative) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div className="h-full w-0 bg-gradient-to-r from-sage to-mustard rounded-full" />
            </div>

            {/* Top bar — cinema-style */}
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-5 py-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="h-1 w-16 rounded-full bg-white/10" />
              </div>
              <div className="flex gap-1 opacity-30">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="15" rx="2"/>
                  <path d="M16 3L8 3"/>
                  <path d="M12 3v4"/>
                </svg>
              </div>
            </div>

            {/* Main content: coming soon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center">
              {/* Big play button */}
              <motion.div
                animate={hovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                className="relative"
              >
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ background: "rgba(44, 62, 107,0.4)", animationDuration: "2s" }} />
                <div className="absolute inset-0 rounded-full animate-ping opacity-10"
                  style={{ background: "rgba(44, 62, 107,0.3)", animationDuration: "2s", animationDelay: "0.5s" }} />

                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(44, 62, 107,0.9), rgba(30, 50, 100,0.9))",
                    boxShadow: "0 8px 32px rgba(44, 62, 107,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Play triangle */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>

              {/* Text */}
              <div>
                <p className="font-serif text-cream text-2xl md:text-3xl mb-2">
                  Notre vidéo arrive bientôt
                </p>
                <p className="font-sans text-cream/45 text-sm max-w-sm mx-auto leading-relaxed">
                  On prépare un beau reel qui capture l'âme de la cantine — les plats, les gens, l'ambiance.
                  Repassez nous voir ! 🎬
                </p>
              </div>

              {/* File info tag */}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                <span className="text-sage/70">▶</span>
                <span>cantine-populaire-reel.mp4</span>
                <span className="text-white/20">•</span>
                <span>Bientôt disponible</span>
              </div>
            </div>

            {/* Bottom controls bar (decorative) */}
            <div
              className="absolute bottom-1 left-0 right-0 flex items-center gap-3 px-5 py-3 transition-opacity duration-300"
              style={{ opacity: hovered ? 1 : 0 }}
            >
              {/* Play icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                <path d="M8 5v14l11-7z"/>
              </svg>
              {/* Progress bar area */}
              <div className="flex-1 h-1 bg-white/10 rounded-full">
                <div className="w-0 h-full bg-sage/70 rounded-full" />
              </div>
              {/* Volume */}
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              {/* Fullscreen */}
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Below player — call to action */}
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
              background: "linear-gradient(135deg, rgba(44, 62, 107,0.2), rgba(44, 62, 107,0.08))",
              border: "1px solid rgba(44, 62, 107,0.3)",
              color: "rgba(245,240,232,0.8)",
            }}
          >
            <span className="text-lg">📸</span>
            Suivre sur Instagram en attendant
          </a>

          <span className="text-cream/20 font-sans text-sm hidden sm:block">·</span>

          <p className="font-sans text-cream/35 text-sm">
            Filmé & monté avec amour, comme on cuisine 🎞️
          </p>
        </motion.div>
      </div>
    </section>
  );
}

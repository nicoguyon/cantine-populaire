"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  const [showControls, setShowControls] = useState(false);

  /* Auto-play / pause via IntersectionObserver */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <section
      id="reel"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #141824 0%, #1a2035 50%, #111520 100%)",
      }}
    >
      {/* Grain overlay */}
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

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
          style={{ maxWidth: "860px" }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-1 rounded-3xl blur-md transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(44,62,107,0.5) 0%, rgba(212,168,67,0.3) 100%)",
              opacity: showControls ? 0.6 : 0.3,
            }}
          />

          {/* Player container */}
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10"
            style={{
              aspectRatio: "16/9",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              ref={videoRef}
              src="/videos/cantine-populaire-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={showControls}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ display: "block" }}
            />

            {/* Vignette overlay (pointer-events-none so controls still work) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.35) 100%)",
              }}
            />
          </div>
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
              background: "linear-gradient(135deg, rgba(44,62,107,0.2), rgba(44,62,107,0.08))",
              border: "1px solid rgba(44,62,107,0.3)",
              color: "rgba(245,240,232,0.8)",
            }}
          >
            <span className="text-lg">📸</span>
            Suivre sur Instagram
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

"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  /* Auto-play / pause via IntersectionObserver */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }, [inView]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

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

        {/* Video — 9:16, centré, max 70vh */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "9/16",
            /* Mobile : pleine largeur. Desktop : contraint par 70vh */
            width: "100%",
            maxWidth: "calc(70vh * 9 / 16)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          }}
        >
          <video
            ref={videoRef}
            src="/videos/cantine-populaire-reel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Controls overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
            {/* Gradient fade at bottom for buttons */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
              }}
            />
            <div className="relative flex items-center justify-between pointer-events-auto z-10">
              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Lecture"}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {playing ? (
                  /* Pause icon */
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <rect x="3" y="2" width="4" height="12" rx="1" />
                    <rect x="9" y="2" width="4" height="12" rx="1" />
                  </svg>
                ) : (
                  /* Play icon */
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <path d="M4 2.5l9 5.5-9 5.5V2.5z" />
                  </svg>
                )}
              </button>

              {/* Mute / Unmute */}
              <button
                onClick={toggleMute}
                aria-label={muted ? "Activer le son" : "Couper le son"}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {muted ? (
                  /* Muted icon */
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  /* Unmuted icon */
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
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
            Filmé & monté avec amour, comme on cuisine 🎞️
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import useSound from "use-sound";

// --- FLOATING LETTERS CONFIG ---
const floatingLetters = [
  { char: "A", x: "10%", y: "20%", delay: 0 },
  { char: "✒️", x: "80%", y: "15%", delay: 2 },
  { char: "R", x: "20%", y: "60%", delay: 4 },
  { char: "✨", x: "70%", y: "80%", delay: 1 },
  { char: "T", x: "50%", y: "40%", delay: 3 },
  { char: "📜", x: "85%", y: "50%", delay: 5 },
];

export default function Home() {
  const [isWritten, setIsWritten] = useState(false);
  const containerRef = useRef(null);
  
  // Scroll Parallax Hooks
  const { scrollYProgress } = useScroll({ target: containerRef });
  const quillY = useTransform(scrollYProgress, [0, 0.5], [0, 300]); 

  // --- SOUNDS ---
  // 1. Scribble: Plays ONLY once on mount
  const [playScribble, { stop: stopScribble }] = useSound('/scribble.mp3', { volume: 0.5 });
  
  // 2. Paper: Used for Hover effects (Same as Inkwell/Scroll sound)
  const [playPaper] = useSound('/paper.mp3', { 
    volume: 0.3,
    interrupt: true, 
  });

  useEffect(() => {
    // Play sound immediately on open
    playScribble();
    
    // Stop sound and finish writing animation after 3.5s
    const timer = setTimeout(() => {
      stopScribble();
      setIsWritten(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [playScribble, stopScribble]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center overflow-x-hidden bg-paper text-ink selection:bg-maroon selection:text-gold">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingLetters.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: item.delay 
            }}
            className="absolute font-royal text-6xl md:text-8xl text-maroon/5 blur-[2px]"
            style={{ left: item.x, top: item.y }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>

      {/* --- HERO SECTION --- */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10">
        <div className="relative">
          {/* Writing Animation */}
          <motion.h1
            initial={{ width: 0, opacity: 1 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="font-hand text-[8rem] md:text-[15rem] text-maroon overflow-hidden whitespace-nowrap leading-tight pr-8 drop-shadow-2xl"
          >
            Raabta
          </motion.h1>

          {/* MASSIVE QUILL */}
          {!isWritten && (
            <motion.div
              style={{ y: quillY }} 
              initial={{ left: 0, y: 0 }}
              animate={{ 
                left: "95%", 
                y: [0, -20, 10, -10, 0] 
              }}
              transition={{
                left: { duration: 3.5, ease: "easeInOut" },
                y: { duration: 0.3, repeat: Infinity, repeatType: "mirror" }
              }}
              className="absolute top-1/3 -translate-y-1/2 ml-4 pointer-events-none z-20"
            >
              <img 
                 src="/quill.png"  
                 alt="Quill" 
                 className="w-48 h-48 md:w-80 md:h-80 opacity-100 rotate-[-25deg] filter drop-shadow-2xl" 
                 style={{ transformOrigin: "bottom left" }}
              />
            </motion.div>
          )}
        </div>

        {/* Subtitle Reveal */}
        {isWritten && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-2 space-y-4 px-4 z-10"
          >
            <div className="w-32 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="font-display text-2xl md:text-3xl tracking-widest text-ink/80 uppercase">
              The Literature Festival of NSUT
            </p>
            <p className="font-body text-maroon/60 italic text-xl">
              "Where ink meets soul."
            </p>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-16 opacity-50"
            >
              <span className="text-sm uppercase tracking-[0.3em]">Scroll Down</span>
              <div className="w-[1px] h-12 bg-ink/30 mx-auto mt-2"></div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* --- SECTION 2: INTERACTIVE INKWELL (Now moved UP) --- */}
      <section className="w-full py-32 bg-[#e8e4da] relative border-y border-maroon/10 z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl text-maroon mb-16"
          >
            The Inkwell
            <span className="block text-sm font-sans tracking-widest text-gold mt-2">HOVER TO REVEAL WISDOM</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => playPaper()} // Plays Sound on Hover
                className="group relative h-80 bg-paper border border-gold/30 shadow-lg cursor-pointer overflow-hidden flex items-center justify-center p-8"
              >
                {/* Overlay that vanishes on hover */}
                <div className="absolute inset-0 bg-maroon flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                  <span className="font-royal text-gold text-6xl">?</span>
                </div>

                {/* Content underneath */}
                <div className="text-center">
                  <p className="font-body italic text-xl text-ink leading-relaxed">
                    {item === 1 && "“There is no greater agony than bearing an untold story inside you.”"}
                    {item === 2 && "“We write to taste life twice, in the moment and in retrospect.”"}
                    {item === 3 && "“So we beat on, boats against the current, borne back ceaselessly into the past.”"}
                  </p>
                  <p className="mt-4 font-bold text-sm text-gold uppercase tracking-widest">
                    {item === 1 && "Maya Angelou"}
                    {item === 2 && "Anaïs Nin"}
                    {item === 3 && "F. Scott Fitzgerald"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ABOUT TATSAM (Now moved DOWN & has ID) --- */}
      <section id="about" className="w-full max-w-7xl mx-auto py-32 px-6 relative z-10 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with Hover Sound */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative cursor-pointer"
            onMouseEnter={() => playPaper()} // Plays sound on hover
          >
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 rounded-tl-[3rem] rounded-br-[3rem]"></div>
            <div className="relative h-[500px] w-full bg-maroon/5 rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               {/* Placeholder for TATSAM Photo */}
               <div className="w-full h-full flex items-center justify-center bg-[#e8e4da]">
                 <span className="font-royal text-6xl text-maroon/20 rotate-[-45deg]">TATSAM</span>
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-display text-6xl text-maroon">
              About <span className="italic text-gold">Tatsam</span>
            </h2>
            <p className="font-body text-lg leading-loose text-justify text-ink/80">
              <span className="font-bold text-maroon text-2xl">Tatsam</span>, the Hindi Literature Society of NSUT, is the beating heart behind Raabta. Derived from the Sanskrit word meaning "Origin", we strive to preserve the purity of language while embracing the chaos of modern expression.
            </p>
            <p className="font-body text-lg leading-loose text-justify text-ink/80">
              We are a collective of poets, writers, and dreamers who believe that every word has a weight, and every silence has a story.
            </p>
            
            {/* Signature */}
            <div className="pt-8 opacity-70">
              <span className="font-hand text-4xl text-maroon">The Team</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full py-12 bg-[#2a1a1a] text-[#e6e0d4] text-center font-body">
        <p className="mb-4 text-2xl font-hand">Raabta x Tatsam</p>
        <p className="text-sm opacity-50">© 2026 NSUT Literature Festival. All rights reserved.</p>
      </footer>
    </div>
  );
}
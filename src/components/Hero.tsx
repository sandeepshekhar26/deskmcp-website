import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
      {/* Background video layer — no overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero/hero-poster.jpg"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        >
          <source src="/hero/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero text content */}
      <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-[42px] md:text-[56px] font-medium tracking-tight leading-[1.05] text-[#0a1b33]">
            Native Mac apps,
            <br />
            built to be driven.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[14px] md:text-[15px] leading-relaxed text-[#64748b]">
            A curated store for native macOS tools that ship as a real .dmg and speak MCP — so you, or
            your AI agent, can drive them. No web wrappers, no accounts, no lock-in.
          </p>
          <motion.a
            href="#catalog"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="mt-8 inline-flex items-center gap-2 bg-[#0a152d] text-white rounded-full px-6 py-3 text-[14px] font-semibold shadow-[0_10px_30px_-10px_rgba(10,21,45,0.5)]"
          >
            Browse the catalog
          </motion.a>
        </motion.div>
      </div>

      {/* Floating bottom navbar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
        >
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm text-[#0a1b33] text-sm">
            ✦
          </span>
          <a
            href="#catalog"
            className="ml-2 px-3 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
          >
            Catalog
          </a>
          <a
            href="/apps/auk"
            className="px-3 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
          >
            AUK
          </a>
          <a
            href="/apps/auk"
            className="ml-1 inline-flex items-center gap-1 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
          >
            Get AUK
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </motion.nav>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-bronze-600/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-bronze-600/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Grain Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        {/* Book Icon/Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.6, 0.01, 0.05, 0.95],
            delay: 0.2
          }}
          className="mb-8 flex justify-center"
        >
          <div className="text-9xl filter drop-shadow-[0_0_30px_rgba(196,164,132,0.5)]">
            📖
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-7xl md:text-8xl font-serif font-bold text-gradient leading-tight mb-4">
            The Evolution of Manliness
          </h1>
          <div className="h-[2px] w-64 mx-auto bg-gradient-to-r from-transparent via-bronze-600 to-transparent" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-3xl text-bronze-300 mb-4 font-serif italic"
        >
          Ancient Wisdom vs. Modern Confusion
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg text-bronze-200/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A journey through time comparing real old men—warriors of honor, strength, and legacy—
          to fake modern influencers of 2026. Discover what true masculinity means.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link href="/chapter-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect metal-border px-10 py-5 rounded-lg text-xl font-bold text-bronze-300 hover:text-bronze-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,94,60,0.5)] min-w-[250px]"
            >
              Begin Your Journey
            </motion.button>
          </Link>

          <Link href="/chapter-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect border-2 border-red-600/40 px-10 py-5 rounded-lg text-xl font-bold text-red-400/80 hover:text-red-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] min-w-[250px]"
            >
              See Modern Fakery
            </motion.button>
          </Link>
        </motion.div>

        {/* Chapter Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <Link href="/chapter-1">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600 cursor-pointer transition-all"
            >
              <div className="text-4xl mb-3">⚔️</div>
              <h3 className="text-bronze-400 font-bold text-lg mb-2">Ancient Principles</h3>
              <p className="text-bronze-200/70 text-sm">The foundation of timeless strength</p>
            </motion.div>
          </Link>

          <Link href="/chapter-2">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600 cursor-pointer transition-all"
            >
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-bronze-400 font-bold text-lg mb-2">Warrior Discipline</h3>
              <p className="text-bronze-200/70 text-sm">The forge of true masculinity</p>
            </motion.div>
          </Link>

          <Link href="/chapter-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600 cursor-pointer transition-all"
            >
              <div className="text-4xl mb-3">⚒️</div>
              <h3 className="text-bronze-400 font-bold text-lg mb-2">Rebuild Manhood</h3>
              <p className="text-bronze-200/70 text-sm">The practical path forward</p>
            </motion.div>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-bronze-400/60 text-sm font-mono tracking-wider">START READING</p>
            <div className="text-2xl text-bronze-400/60">↓</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-bronze-600 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="fixed bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-bronze-600 to-transparent"
      />
    </div>
  );
}

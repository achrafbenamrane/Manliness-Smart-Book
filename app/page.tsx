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
    <div className="h-screen w-screen bg-dark-900 relative overflow-hidden flex items-center justify-center px-4">
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

      {/* Book Cover Design */}
      <div className="relative z-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="perspective-1000"
        >
          {/* Book Cover Container */}
          <div className="relative bg-gradient-to-br from-dark-800 via-dark-900 to-black border-2 md:border-4 border-bronze-600 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Decorative Top Border */}
            <div className="h-2 md:h-3 bg-gradient-to-r from-bronze-600 via-bronze-400 to-bronze-600"></div>
            
            {/* Book Content */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 relative">
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-bronze-600 opacity-60"></div>
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-bronze-600 opacity-60"></div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-bronze-600 opacity-60"></div>
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-r-2 border-bronze-600 opacity-60"></div>

              {/* Book Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mb-4 md:mb-8"
              >
                <div className="text-5xl md:text-7xl filter drop-shadow-[0_0_20px_rgba(196,164,132,0.6)]">
                  📖
                </div>
              </motion.div>

              {/* Book Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center mb-4 md:mb-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient leading-tight mb-3 md:mb-4">
                  The Evolution of
                  <br />
                  Manliness
                </h1>
                <div className="h-[2px] w-32 md:w-48 mx-auto bg-gradient-to-r from-transparent via-bronze-600 to-transparent mb-4 md:mb-6"></div>
                <p className="text-bronze-300 text-base sm:text-lg md:text-xl font-serif italic px-4">
                  Ancient Wisdom vs Modern Confusion
                </p>
              </motion.div>

              {/* Short Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center mb-6 md:mb-10 px-2"
              >
                <p className="text-bronze-200/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                  A powerful journey through real masculinity: comparing ancient warriors 
                  and honorable men to the fake influencers of 2026.
                </p>
              </motion.div>

              {/* Author Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-center mb-6 md:mb-10"
              >
                <p className="text-bronze-400/60 text-xs md:text-sm tracking-widest mb-2">WRITTEN BY</p>
                <p className="text-bronze-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold tracking-wide px-4">
                  BENAMRANE MOHAMED ACHRAF
                </p>
              </motion.div>

              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center"
              >
                <Link href="/chapter-1">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(139, 94, 60, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-bronze-600 to-bronze-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-lg shadow-[0_0_30px_rgba(139,94,60,0.4)] hover:shadow-[0_0_50px_rgba(139,94,60,0.8)] transition-all duration-300 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      <span>GO TO LEARN</span>
                      <span className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-bronze-500 to-bronze-400"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Decorative Bottom Border */}
            <div className="h-2 md:h-3 bg-gradient-to-r from-bronze-600 via-bronze-400 to-bronze-600"></div>
          </div>

          {/* Book Shadow/Spine Effect */}
          <div className="absolute -left-2 md:-left-4 top-8 bottom-8 w-2 md:w-4 bg-gradient-to-r from-bronze-900/80 to-transparent rounded-l-lg blur-sm"></div>
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-600/20 rounded-full blur-[120px] pointer-events-none"
      />
    </div>
  );
}

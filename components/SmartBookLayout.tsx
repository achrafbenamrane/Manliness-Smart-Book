'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import TimelineNav from './TimelineNav';
import {useTranslations} from 'next-intl';

interface SmartBookLayoutProps {
  children: ReactNode;
  currentChapter: number;
  totalChapters: number;
}

// Page turn animation variants
const pageVariants = {
  initial: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.8,
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  }),
};

export default function SmartBookLayout({ 
  children, 
  currentChapter, 
  totalChapters 
}: SmartBookLayoutProps) {
  const t = useTranslations('nav');
  
  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bronze-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Book Page Container with 3D Perspective */}
      <div className="relative z-10 perspective-[2000px]">
        <AnimatePresence mode="wait" custom={currentChapter}>
          <motion.div
            key={currentChapter}
            custom={currentChapter}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen preserve-3d"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Page Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
            
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Navigation */}
      <TimelineNav 
        currentChapter={currentChapter} 
        totalChapters={totalChapters} 
      />

      {/* Page Counter - Centered below navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-2 left-1/2 -translate-x-1/2 z-30"
      >
        <p className="font-serif text-bronze-400/60 text-xs">
          {t('chapterOf', { current: currentChapter, total: totalChapters })}
        </p>
      </motion.div>

      {/* Book Spine Shadow (Left Edge) */}
      <div className="fixed left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-20" />
    </div>
  );
}

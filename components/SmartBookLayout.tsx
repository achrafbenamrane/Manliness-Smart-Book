'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import TimelineNav from './TimelineNav';

interface SmartBookLayoutProps {
  children: ReactNode;
  currentChapter: number;
  totalChapters: number;
}

export default function SmartBookLayout({ 
  children, 
  currentChapter, 
  totalChapters 
}: SmartBookLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bronze-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.6, 0.01, 0.05, 0.95] 
            }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Navigation */}
      <TimelineNav 
        currentChapter={currentChapter} 
        totalChapters={totalChapters} 
      />

      {/* Page Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50 font-mono text-bronze-400/60 text-sm"
      >
        <span className="text-bronze-400">{currentChapter}</span> / {totalChapters}
      </motion.div>
    </div>
  );
}

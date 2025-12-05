'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {useTranslations} from 'next-intl';

interface ChapterProps {
  number: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Chapter({ number, title, subtitle, children }: ChapterProps) {
  const t = useTranslations('chapter');
  
  return (
    <div className="min-h-screen px-8 py-20 max-w-6xl mx-auto">
      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="text-bronze-400/60 font-mono text-sm tracking-[0.3em]">
            {t('chapterLabel')} {number}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-7xl font-serif font-bold mb-6 text-gradient leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-bronze-300/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-bronze-600 to-transparent"
        />
      </motion.div>

      {/* Chapter Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-bronze-300 mb-6 flex items-center gap-4">
        <span className="w-12 h-[2px] bg-bronze-600" />
        {title}
      </h2>
      <div className="prose prose-invert prose-lg max-w-none">
        {children}
      </div>
    </motion.section>
  );
}

interface QuoteProps {
  text: string;
  author?: string;
  delay?: number;
}

export function Quote({ text, author, delay = 0 }: QuoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="my-12 glass-effect metal-border rounded-lg p-8 relative"
    >
      <div className="absolute top-4 left-4 text-6xl text-bronze-600/20 font-serif">"</div>
      <p className="text-xl md:text-2xl text-bronze-200 font-serif italic relative z-10 mb-4">
        {text}
      </p>
      {author && (
        <cite className="text-bronze-400 text-sm not-italic block">— {author}</cite>
      )}
    </motion.blockquote>
  );
}

interface ComparisonProps {
  oldMen: string[];
  modernMen: string[];
  delay?: number;
}

export function Comparison({ oldMen, modernMen, delay = 0 }: ComparisonProps) {
  const t = useTranslations('chapter');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="grid md:grid-cols-2 gap-6 my-12"
    >
      {/* Real Old Men */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-effect border-l-4 border-bronze-600 rounded-lg p-6"
      >
        <h3 className="text-2xl font-serif font-bold text-bronze-400 mb-4 flex items-center gap-2">
          ⚔ {t('realOldMen')}
        </h3>
        <ul className="space-y-3">
          {oldMen.map((trait, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-start gap-3 text-bronze-200"
            >
              <span className="text-bronze-600 mt-1">●</span>
              <span>{trait}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Fake Modern Men */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-effect border-l-4 border-red-600/60 rounded-lg p-6"
      >
        <h3 className="text-2xl font-serif font-bold text-red-400/80 mb-4 flex items-center gap-2">
          ⚠ {t('fakeModernMen')}
        </h3>
        <ul className="space-y-3">
          {modernMen.map((trait, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-start gap-3 text-iron-400"
            >
              <span className="text-red-600/60 mt-1">●</span>
              <span>{trait}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

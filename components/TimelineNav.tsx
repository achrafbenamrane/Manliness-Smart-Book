'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

interface TimelineNavProps {
  currentChapter: number;
  totalChapters: number;
}

const chapters = [
  { id: 0, title: 'prologue', path: '/', icon: '◈' },
  { id: 1, title: 'chapter1', path: '/chapter-1', icon: '⚔' },
  { id: 2, title: 'chapter2', path: '/chapter-2', icon: '🛡' },
  { id: 3, title: 'chapter3', path: '/chapter-3', icon: '⚠' },
  { id: 4, title: 'chapter4', path: '/chapter-4', icon: '⚒' },
  { id: 5, title: 'chapter5', path: '/chapter-5', icon: '👑' },
];

export default function TimelineNav({ currentChapter, totalChapters }: TimelineNavProps) {
  const pathname = usePathname();
  const t = useTranslations('nav');

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-40 pb-6 md:pb-8 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect rounded-full px-6 md:px-12 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {chapters.map((chapter, index) => {
              const isActive = pathname === chapter.path;
              const isPast = chapter.id < currentChapter;

              return (
                <div key={chapter.id} className="flex items-center flex-1">
                  <Link
                    href={chapter.path}
                    className="group relative flex-1 flex justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-2 relative"
                    >
                      {/* Chapter Dot with Number/Icon */}
                      <div
                        className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 flex items-center justify-center
                        ${isActive 
                          ? 'bg-bronze-400 shadow-[0_0_20px_rgba(196,164,132,0.9)] scale-110' 
                          : isPast 
                          ? 'bg-bronze-600/70' 
                          : 'bg-iron-600/40'
                        }
                        group-hover:shadow-[0_0_20px_rgba(196,164,132,0.6)]
                      `}
                      >
                        {chapter.id === 0 ? (
                          // Home icon for first button - styled SVG
                          <svg 
                            className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'fill-dark-900' : 'fill-bronze-200'}`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                          </svg>
                        ) : (
                          // Numbers for chapters 1-5
                          <span className={`
                            text-xs md:text-sm font-bold
                            ${isActive ? 'text-dark-900' : 'text-bronze-200'}
                          `}>
                            {chapter.id}
                          </span>
                        )}
                      </div>

                      {/* Chapter Icon & Title (on hover) */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="hidden md:block absolute bottom-full mb-4 pointer-events-none"
                      >
                        <div className="glass-effect rounded-lg px-4 py-2 whitespace-nowrap">
                          <div className="text-2xl mb-1">{chapter.icon}</div>
                          <div className="text-xs text-bronze-300 font-medium">
                            {t(chapter.title)}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </Link>
                  
                  {/* Horizontal Connecting Line between dots */}
                  {index < chapters.length - 1 && (
                    <div
                      className={`
                      flex-1 h-[2px] transition-all duration-300
                      ${isPast 
                        ? 'bg-bronze-600/50' 
                        : 'bg-iron-600/20'
                      }
                    `}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

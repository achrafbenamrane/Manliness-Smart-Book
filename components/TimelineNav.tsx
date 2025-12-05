'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TimelineNavProps {
  currentChapter: number;
  totalChapters: number;
}

const chapters = [
  { id: 0, title: 'Prologue', path: '/', icon: '◈' },
  { id: 1, title: 'Ancient Principles', path: '/chapter-1', icon: '⚔' },
  { id: 2, title: 'Warrior Discipline', path: '/chapter-2', icon: '🛡' },
  { id: 3, title: 'Modern Confusion', path: '/chapter-3', icon: '⚠' },
  { id: 4, title: 'Rebuilding Manhood', path: '/chapter-4', icon: '⚒' },
  { id: 5, title: 'Path of Honor', path: '/chapter-5', icon: '👑' },
];

export default function TimelineNav({ currentChapter, totalChapters }: TimelineNavProps) {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-50 pb-4 md:pb-8 px-2 md:px-8"
    >
      {/* Scrollable container for mobile */}
      <div className="max-w-4xl mx-auto overflow-x-auto overflow-y-visible pb-2 scrollbar-hide">
        <div className="glass-effect rounded-full px-4 md:px-8 py-3 md:py-4 min-w-max md:min-w-0">
          <div className="flex items-center justify-between md:justify-between gap-1 md:gap-2 min-w-[480px] md:min-w-0">
            {chapters.map((chapter, index) => {
              const isActive = pathname === chapter.path;
              const isPast = chapter.id < currentChapter;
              const isFuture = chapter.id > currentChapter;

              return (
                <Link
                  key={chapter.id}
                  href={chapter.path}
                  className="group relative flex-shrink-0 md:flex-1"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2"
                  >
                    {/* Chapter Dot */}
                    <div
                      className={`
                      w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
                      ${isActive 
                        ? 'bg-bronze-400 shadow-[0_0_15px_rgba(196,164,132,0.8)] md:shadow-[0_0_20px_rgba(196,164,132,0.8)] scale-125' 
                        : isPast 
                        ? 'bg-bronze-600/70' 
                        : 'bg-iron-600/40'
                      }
                      group-hover:shadow-[0_0_15px_rgba(196,164,132,0.6)]
                    `}
                    />

                    {/* Chapter Icon & Title (on hover) - Hidden on very small screens */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="hidden sm:block absolute bottom-full mb-4 pointer-events-none"
                    >
                      <div className="glass-effect rounded-lg px-3 md:px-4 py-2 whitespace-nowrap">
                        <div className="text-xl md:text-2xl mb-1">{chapter.icon}</div>
                        <div className="text-[10px] md:text-xs text-bronze-300 font-medium">
                          {chapter.title}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Connecting Line */}
                  {index < chapters.length - 1 && (
                    <div
                      className={`
                      absolute top-[5px] md:top-[6px] left-1/2 w-full h-[1.5px] md:h-[2px] -z-10
                      transition-all duration-300
                      ${isPast 
                        ? 'bg-bronze-600/50' 
                        : 'bg-iron-600/20'
                      }
                    `}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Scroll hint for mobile */}
      <div className="md:hidden text-center mt-2">
        <p className="text-bronze-400/40 text-[10px] font-mono">
          ← Swipe to see all chapters →
        </p>
      </div>
    </motion.nav>
  );
}

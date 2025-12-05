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
      className="fixed bottom-0 left-0 right-0 z-50 pb-8 px-8"
    >
      <div className="max-w-4xl mx-auto glass-effect rounded-full px-8 py-4">
        <div className="flex items-center justify-between gap-2">
          {chapters.map((chapter, index) => {
            const isActive = pathname === chapter.path;
            const isPast = chapter.id < currentChapter;
            const isFuture = chapter.id > currentChapter;

            return (
              <Link
                key={chapter.id}
                href={chapter.path}
                className="group relative flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2"
                >
                  {/* Chapter Dot */}
                  <div
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${isActive 
                        ? 'bg-bronze-400 shadow-[0_0_20px_rgba(196,164,132,0.8)] scale-125' 
                        : isPast 
                        ? 'bg-bronze-600/70' 
                        : 'bg-iron-600/40'
                      }
                      group-hover:shadow-[0_0_15px_rgba(196,164,132,0.6)]
                    `}
                  />

                  {/* Chapter Icon & Title (on hover) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-4 pointer-events-none"
                  >
                    <div className="glass-effect rounded-lg px-4 py-2 whitespace-nowrap">
                      <div className="text-2xl mb-1">{chapter.icon}</div>
                      <div className="text-xs text-bronze-300 font-medium">
                        {chapter.title}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Connecting Line */}
                {index < chapters.length - 1 && (
                  <div
                    className={`
                      absolute top-[6px] left-1/2 w-full h-[2px] -z-10
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
    </motion.nav>
  );
}

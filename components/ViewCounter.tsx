'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increment view count
    const incrementView = async () => {
      try {
        const response = await fetch('/api/views', {
          method: 'POST',
        });
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error('Error incrementing views:', error);
        // Fallback to GET if POST fails
        try {
          const response = await fetch('/api/views');
          const data = await response.json();
          setViews(data.views);
        } catch (getError) {
          console.error('Error getting views:', getError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    incrementView();
  }, []);

  if (isLoading || views === null) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50 glass-effect rounded-lg px-4 py-2 border border-bronze-600/30 flex items-center gap-2"
      >
        <span className="text-bronze-300 font-medium text-sm">...</span>
        <span className="text-base">👁️</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-6 z-50 glass-effect rounded-lg px-4 py-2 border border-bronze-600/30 flex items-center gap-2"
    >
      <span className="text-bronze-300 font-medium text-sm">
        {views.toLocaleString()}
      </span>
      <span className="text-base">👁️</span>
    </motion.div>
  );
}

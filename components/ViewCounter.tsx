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
      <div className="flex items-center gap-2 text-bronze-400/60">
        <span className="text-sm">👁️</span>
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 text-bronze-400"
    >
      <span className="text-lg">👁️</span>
      <span className="text-sm font-medium">
        {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
      </span>
    </motion.div>
  );
}

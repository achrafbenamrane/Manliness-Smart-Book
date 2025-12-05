'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Get current locale from cookie
    const currentLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1] || 'en';
    setLocale(currentLocale);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    window.location.reload();
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 glass-effect rounded-lg px-4 py-2 border border-bronze-600/30 flex items-center gap-2"
    >
      <span className="text-bronze-300 font-medium text-sm">
        {locale === 'en' ? 'العربية' : 'English'}
      </span>
      <svg 
        className="w-5 h-5 fill-bronze-400" 
        viewBox="0 0 24 24"
      >
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
      </svg>
    </motion.button>
  );
}

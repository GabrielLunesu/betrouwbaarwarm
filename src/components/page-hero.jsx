'use client';

import { motion } from 'framer-motion';
import { useLanguage, translations } from '@/lib/language-context';

export function PageHero({ title, subtitle }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
} 
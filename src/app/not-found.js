'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          Pagina niet gevonden
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 mb-8"
        >
          De pagina die u zoekt bestaat niet of is verplaatst.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-hover transition-colors"
          >
            Terug naar home
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 
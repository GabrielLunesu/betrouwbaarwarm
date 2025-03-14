'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Background with subtle gradient and animated shapes */}
      <div className="absolute inset-0 bg-white z-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary-200/20 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="container-center relative z-10">
        <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-10 shadow-glass border border-white/20 max-w-md mx-auto text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Oeps!
          </motion.h1>
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Er is iets misgegaan
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We hebben een onverwachte fout aangetroffen. Onze excuses voor het ongemak.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button onClick={() => reset()} size="lg" className="btn-hover flex items-center justify-center">
              <RefreshCw className="mr-2 h-5 w-5" />
              Probeer opnieuw
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-hover">
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Terug naar de homepagina
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage, translations } from '@/lib/language-context';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container text-white mx-auto px-4 relative z-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {t.heroTitle}
              <motion.span
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-white"
              ></motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white md:text-xl mb-8 max-w-lg"
            >
              {t.heroSubtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/diensten"
                className="bg-white text-primary px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors group"
              >
                {t.ourServices}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="https://wa.me/31612345678"
                target="_blank"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={18} />
                {t.askQuestion}
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-lg blur-xl"></div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg relative">
                <Image
                  src="/hero.png"
                  alt="Roof renovation showcase"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto shadow-lg"
                />
                <div className="mt-6 flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-lg p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Gratis vrijblijvende offerte</h3>
                    <p className="text-white/80 text-sm">Binnen 24 uur een offerte op maat</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="h-12 w-8 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 24, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="h-2 w-2 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-100/50 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary-200/40 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="container-center pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Uw <span className="text-primary">betrouwbare</span> partner voor warmte en comfort
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Specialisten in warmtepompen, airconditioning en CV-ketels in de regio Parkstad. Wij zorgen voor het perfecte binnenklimaat in uw woning of bedrijf.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button asChild size="lg" className="font-medium btn-hover">
                <Link href="/contact">
                  Neem contact op
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium btn-hover">
                <Link href="/over-ons">
                  Meer over ons
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-glass shadow-glass flex items-center justify-center overflow-hidden">
                <Image
                  src="/warmtepomp.png"
                  alt="BetrouwbaarWarm Comfort Solutions"
                  width={500}
                  height={300}
                  className="object-contain animate-float"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 z-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-10 shadow-glass border border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Klaar voor een comfortabel binnenklimaat?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Neem vandaag nog contact met ons op voor een vrijblijvende offerte of adviesgesprek.
                Onze experts staan voor u klaar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="font-medium btn-hover bg-white text-primary-600 hover:bg-white/90">
                  <Link href="/contact" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Neem contact op
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-medium border-white/20 hover:bg-white/10 text-white btn-hover">
                  <Link href="/over-ons" className="flex items-center">
                    Meer over ons
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
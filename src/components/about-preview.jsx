'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, User, Hammer, Star } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20 z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden border-8 border-white shadow-xl">
              <Image
                src="/daniel.jpg"
                alt="Daniel Gábor"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 z-20">
              <div className="relative bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-600 font-medium">Jaar ervaring</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-10 bg-primary"></div>
              <p className="text-primary font-medium uppercase tracking-wider text-sm">Over ons</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eigenaar & Dakexpert Daniel Gábor
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Met passie voor het vak en meer dan een decennium aan ervaring, heeft Daniel Gábor zich gespecialiseerd in hoogwaardige dakrenovaties en -reparaties. Samen met zijn team staat hij garant voor kwaliteit en betrouwbaarheid.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Persoonlijke aanpak</h3>
                  <p className="text-gray-600 text-sm">Altijd direct contact met de eigenaar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Hammer className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Vakmanschap</h3>
                  <p className="text-gray-600 text-sm">Uitsluitend met kwaliteitsmaterialen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Klanttevredenheid</h3>
                  <p className="text-gray-600 text-sm">Meer dan 450 succesvolle projecten</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/over-ons"
              className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors group"
            >
              Meer over ons
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
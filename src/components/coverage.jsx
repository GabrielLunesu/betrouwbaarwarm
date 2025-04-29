'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Check } from 'lucide-react';
import { useLanguage, translations } from '@/lib/language-context';

export function Coverage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const cities = [
    'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven',
    'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen',
    'Apeldoorn', 'Haarlem', 'Arnhem', 'Enschede', 'Amersfoort',
    'Zaanstad', 'Zwolle', 'Zoetermeer', 'Leiden', 'Maastricht'
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-10 bg-primary"></div>
              <p className="text-primary font-medium uppercase tracking-wider text-sm">{t.coverageArea}</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.coverageTitle}
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              {t.coverageDescription}
            </p>
            
            <div className="relative p-6 bg-primary/5 rounded-lg border border-primary/10 mb-8">
              <div className="absolute -top-5 -right-5 bg-primary text-white p-2 rounded-md shadow-md flex items-center gap-2">
                <MapPin size={18} /> 
                <span className="font-medium">{t.nationalCoverage}</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                {cities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{city}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-primary text-sm font-medium">{t.otherCities}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">{t.outsideCities}</p>
                <p className="text-gray-600 text-sm">{t.visitAnywhere}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-lg z-0"></div>
              <div className="relative z-10">
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl border-4 sm:border-8 border-white">
                  <Image
                    src="/map.png"
                    alt="Kaart van Nederland"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px] sm:max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{t.allNetherlands}</h3>
                      <p className="text-gray-600 text-sm">{t.weComeCoverywhere}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
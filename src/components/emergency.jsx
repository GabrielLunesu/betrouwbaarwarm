'use client';

import { motion } from 'framer-motion';
import { Phone, AlertTriangle, Clock } from 'lucide-react';
import Link from 'next/link';
import { useLanguage, translations } from '@/lib/language-context';

export function Emergency() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{t.emergencyService}</h2>
              
              <p className="text-gray-600 mb-6">
                {t.emergencyDescription}
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-gray-600">{t.available24_6}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-gray-600">{t.fastResponse}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-gray-600">{t.professionalApproach}</span>
                </li>
              </ul>
              
              <Link
                href="tel:+31657824194"
                className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">{t.callForHelp}</span>
              </Link>
            </div>
            
            <div className="bg-primary p-8 text-white flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl text-white font-bold mb-6">{t.guaranteedResponse}</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <div>
                    <span className="block text-white/90 text-sm mb-1">{t.emergencySituations}</span>
                    <span className="font-medium">{t.within2_4Hours}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1.5 bg-white/30 rounded-full w-24 overflow-hidden relative"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute top-0 left-0 h-full bg-white rounded-full"
                    />
                  </motion.div>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <div>
                    <span className="block text-white/90 text-sm mb-1">{t.regularInspections}</span>
                    <span className="font-medium">{t.within1_2Days}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-1.5 bg-white/30 rounded-full w-24 overflow-hidden relative"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="absolute top-0 left-0 h-full bg-white rounded-full"
                    />
                  </motion.div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block text-white/90 text-sm mb-1">{t.quotes}</span>
                    <span className="font-medium">{t.within24Hours}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="h-1.5 bg-white/30 rounded-full w-24 overflow-hidden relative"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="absolute top-0 left-0 h-full bg-white rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
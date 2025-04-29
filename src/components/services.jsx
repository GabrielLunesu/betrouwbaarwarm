'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage, translations } from '@/lib/language-context';

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Service translations
  const serviceTranslations = {
    nl: [
      {
        title: 'Bitumen dak',
        description: 'Duurzame oplossingen voor platte daken met bitumen dakbedekking.',
        link: '/diensten/bitumen-dak'
      },
      {
        title: 'PVC dak',
        description: 'Moderne PVC dakbedekking met uitstekende waterdichtheid en levensduur.',
        link: '/diensten/pvc-dak'
      },
      {
        title: 'Pannendak',
        description: 'Renovatie en onderhoud van traditionele en moderne pannendaken.',
        link: '/diensten/pannendak'
      },
      {
        title: 'Zink- en loodwerk',
        description: 'Specialistisch zink- en loodwerk voor dakgoten en schoorstenen.',
        link: '/diensten/zink-loodwerk'
      }
    ],
    en: [
      {
        title: 'Bitumen roof',
        description: 'Sustainable solutions for flat roofs with bitumen roofing.',
        link: '/diensten/bitumen-dak'
      },
      {
        title: 'PVC roof',
        description: 'Modern PVC roofing with excellent water resistance and lifespan.',
        link: '/diensten/pvc-dak'
      },
      {
        title: 'Tile roof',
        description: 'Renovation and maintenance of traditional and modern tile roofs.',
        link: '/diensten/pannendak'
      },
      {
        title: 'Zinc and lead work',
        description: 'Specialized zinc and lead work for gutters and chimneys.',
        link: '/diensten/zink-loodwerk'
      }
    ]
  };

  const services = serviceTranslations[language];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.servicesTitle}</h2>
          <p className="text-gray-600 text-lg">
            {t.servicesSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-primary text-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              <h3 className="text-xl text-white font-bold mb-3">{service.title}</h3>
              <p className="text-white/80 mb-4">{service.description}</p>
              <Link 
                href="/diensten"
                className="inline-flex items-center text-white font-medium group-hover:underline transition-colors"
              >
                {t.readMore}
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div 
                className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
                }`} 
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/diensten"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
          >
            {t.viewAllServices}
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 
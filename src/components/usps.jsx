'use client';

import { motion } from 'framer-motion';
import { Check, Award, Calendar, MapPin } from 'lucide-react';
import { useLanguage, translations } from '@/lib/language-context';

export function USPs() {
  const { language } = useLanguage();
  const t = translations[language];

  const uspItems = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: t.yearsExperience,
      description: "Vakmanschap en kennis die u kunt vertrouwen"
    },
    {
      icon: <Check className="w-6 h-6 text-primary" />,
      title: t.roofsRenovated,
      description: "Bewezen expertise in talloze succesvolle projecten"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: t.yearWarranty,
      description: "Zorgeloos genieten van een kwalitatief hoogwaardig dak"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t.coverageNL,
      description: "Wij komen graag bij u langs, waar u ook woont"
    }
  ];

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.whyChooseUs}</h2>
          <p className="text-gray-600 text-lg">
            {t.experienceAndQuality}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {uspItems.map((usp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="p-4 bg-primary/5 rounded-full inline-block mb-4 group-hover:bg-primary/10 transition-colors">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{usp.title}</h3>
              <p className="text-gray-600">{usp.description}</p>
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
          <p className="text-primary font-medium inline-flex items-center">
            <span className="bg-primary/10 p-1 rounded-full mr-2">
              <Check className="w-4 h-4 text-primary" />
            </span>
            {t.urgentRepairs}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 
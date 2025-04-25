'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { useLanguage, translations } from '@/lib/language-context';

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const mainServices = [
    {
      title: 'Bitumen dak',
      description: 'Professionele installatie en renovatie van bitumen dakbedekking voor platte daken. Duurzaam, waterdicht en bestand tegen diverse weersomstandigheden.',
      image: 'https://placehold.co/800x600/0e2c4b/FFFFFF/png?text=Bitumen+dak',
      link: '/diensten/bitumen-dak',
      features: ['Lange levensduur', 'UV-bestendig', 'Volledig waterdicht', '10 jaar garantie']
    },
    {
      title: 'PVC dak',
      description: 'Moderne PVC dakbedekking met uitstekende waterdichtheid en levensduur. Lichtgewicht, flexibel en eenvoudig te onderhouden.',
      image: 'https://placehold.co/800x600/0e2c4b/FFFFFF/png?text=PVC+dak',
      link: '/diensten/pvc-dak',
      features: ['Duurzame oplossing', 'Milieuvriendelijk', 'Eenvoudig onderhoud', 'Bestand tegen extreme weersomstandigheden']
    },
    {
      title: 'Pannendak',
      description: 'Renovatie en onderhoud van traditionele en moderne pannendaken. Vakkundige plaatsing en reparatie van alle soorten dakpannen.',
      image: 'https://placehold.co/800x600/0e2c4b/FFFFFF/png?text=Pannendak',
      link: '/diensten/pannendak',
      features: ['Breed assortiment dakpannen', 'Traditioneel vakmanschap', 'Esthetisch aantrekkelijk', 'Uitstekende ventilatie']
    },
    {
      title: 'Zink- en loodwerk',
      description: 'Specialistisch zink- en loodwerk voor dakgoten, schoorstenen en andere dakdetails. Vakkundige afwerking voor optimale bescherming.',
      image: 'https://placehold.co/800x600/0e2c4b/FFFFFF/png?text=Zink+en+loodwerk',
      link: '/diensten/zink-loodwerk',
      features: ['Duurzame materialen', 'Waterdichte aansluitingen', 'Esthetisch fraai', 'Corrosiebestendig']
    }
  ];
  
  const additionalServices = [
    { name: 'Dakinspectie', link: '/contact' },
    { name: 'Dakonderhoud', link: '/contact' },
    { name: 'Dakreparatie', link: '/contact' },
    { name: 'Daklekkage verhelpen', link: '/contact' },
    { name: 'Vogelwering', link: '/contact' },
    { name: 'Nokvorsten vervangen', link: '/contact' },
    { name: 'Dakreiniging en dakcoating', link: '/contact' },
    { name: 'Dakpannen vervangen', link: '/contact' },
    { name: 'Schoorsteenrenovatie', link: '/contact' },
    { name: 'Dakisolatie', link: '/contact' },
    { name: 'Dakgoten', link: '/contact' },
    { name: 'Dakrenovatie', link: '/contact' }
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
    <>
      <PageHero 
        title="Onze diensten" 
        subtitle="Ontdek ons uitgebreide aanbod aan hoogwaardige dakdiensten uitgevoerd door ervaren vakmensen"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-20"
          >
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.title}
                variants={item}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-primary/5 rounded-lg z-0"></div>
                  <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-1 w-10 bg-primary"></div>
                    <p className="text-primary font-medium uppercase tracking-wider text-sm">Dakdienst</p>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-3">Voordelen:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
                  >
                    Meer over {service.title}
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meer diensten</h2>
            <p className="text-gray-600 text-lg">
              Naast onze hoofddiensten bieden wij ook de volgende specialistische diensten aan
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {additionalServices.map((service) => (
              <Link
                key={service.name}
                href={service.link}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center"
              >
                <ChevronRight size={18} className="text-primary mr-2 flex-shrink-0" />
                <span className="font-medium text-gray-900">{service.name}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Niet zeker welke service u nodig heeft?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Neem contact met ons op voor een vrijblijvende inspectie en advies op maat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Neem contact op
                </Link>
                <Link 
                  href="tel:+31657824194"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border border-white/30 rounded-md hover:bg-white/20 transition-colors font-medium"
                >
                  Bel direct: +31 6 57824194
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
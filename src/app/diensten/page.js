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
      key: 'bitumen',
      title: t.roofService.bitumen,
      description: t.serviceDescriptions.bitumen,
      image: '/work/bitumendak.jpeg',
      link: '/diensten/bitumen-dak',
      features: t.serviceFeatures.bitumen
    },
    {
      key: 'pvc',
      title: t.roofService.pvc,
      description: t.serviceDescriptions.pvc,
      image: '/work/PVCdak.png',
      link: '/diensten/pvc-dak',
      features: t.serviceFeatures.pvc
    },
    {
      key: 'pannen',
      title: t.roofService.pannen,
      description: t.serviceDescriptions.pannen,
      image: '/work/pannendak.png',
      link: '/diensten/pannendak',
      features: t.serviceFeatures.pannen
    },
    {
      key: 'zink',
      title: t.roofService.zink,
      description: t.serviceDescriptions.zink,
      image: '/work/zinkenloodwerk.png',
      link: '/diensten/zink-loodwerk',
      features: t.serviceFeatures.zink
    }
  ];
  
  const additionalServices = [
    { name: t.roofService.inspectie, link: '/contact' },
    { name: t.roofService.onderhoud, link: '/contact' },
    { name: t.roofService.reparatie, link: '/contact' },
    { name: t.roofService.lekkage, link: '/contact' },
    { name: t.roofService.vogels, link: '/contact' },
    { name: t.roofService.nokvorsten, link: '/contact' },
    { name: t.roofService.reiniging, link: '/contact' },
    { name: t.roofService.pannenVervangen, link: '/contact' },
    { name: t.roofService.schoorsteen, link: '/contact' },
    { name: t.roofService.isolatie, link: '/contact' },
    { name: t.roofService.goten, link: '/contact' },
    { name: t.roofService.renovatie, link: '/contact' }
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
        title={t.servicesTitle} 
        subtitle={t.servicesSubtitle}
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
                key={service.key}
                variants={item}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-primary/5 rounded-lg z-0"></div>
                  <div className="relative z-10 overflow-hidden rounded-lg shadow-lg aspect-square">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-1 w-10 bg-primary"></div>
                    <p className="text-primary font-medium uppercase tracking-wider text-sm">{t.roofServiceLabel}</p>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-3">{t.advantages}</h3>
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
                    {t.moreAbout} {service.title}
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.moreServicesTitle}</h2>
            <p className="text-gray-600 text-lg">
              {t.moreServicesSubtitle}
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
                {t.unsureServiceTitle}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {t.unsureServiceSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  {t.contactUs}
                </Link>
                <Link 
                  href="tel:+31657824194"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border border-white/30 rounded-md hover:bg-white/20 transition-colors font-medium"
                >
                  {t.callDirectly} +31 6 57824194
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
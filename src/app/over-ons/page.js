'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Award, 
  Users, 
  Calendar, 
  Shield, 
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { useLanguage, translations } from '@/lib/language-context';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Kwaliteit",
      description: "Wij gebruiken alleen hoogwaardige materialen en werken met de nieuwste technieken."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Betrouwbaarheid",
      description: "We komen onze afspraken na en staan altijd klaar voor onze klanten."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Klantgericht",
      description: "Uw wensen staan centraal in ons werk, met persoonlijke aandacht en maatwerk."
    }
  ];

  const milestones = [
    {
      year: "2013",
      title: "Oprichting Daniel Dakrenovatie",
      description: "Start van het bedrijf door Daniel Gábor met een focus op kwaliteit en service."
    },
    {
      year: "2016",
      title: "100e project afgerond",
      description: "Een belangrijke mijlpaal in de groei van ons bedrijf."
    },
    {
      year: "2018",
      title: "Uitbreiding team",
      description: "Versterking van het team met ervaren dakdekkers om aan de groeiende vraag te voldoen."
    },
    {
      year: "2020",
      title: "Uitbreiding diensten",
      description: "Toevoeging van specialistische diensten zoals zink- en loodwerk."
    },
    {
      year: "2023",
      title: "450+ succesvolle projecten",
      description: "Een nieuwe mijlpaal bereikt met honderden tevreden klanten door heel Nederland."
    }
  ];
  
  return (
    <>
      <PageHero 
        title={t.aboutUs} 
        subtitle="Al meer dan 10 jaar uw betrouwbare partner voor dakrenovaties en reparaties"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
              
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-bold text-gray-900">Daniel Gábor</p>
                    <p className="text-gray-600 text-sm">Eigenaar & Dakexpert</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-1 w-10 bg-primary"></div>
                <p className="text-primary font-medium uppercase tracking-wider text-sm">Ons verhaal</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Passie voor vakmanschap en kwaliteit
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Daniel Dakrenovatie werd in 2013 opgericht door Daniel Gábor, een expert met jarenlange ervaring in de dakdekkersbranche. Wat begon als een eenmanszaak, is uitgegroeid tot een gerenommeerd dakdekkersbedrijf met een team van ervaren vakmensen.
                </p>
                <p>
                  Met meer dan 10 jaar ervaring en 450 succesvolle projecten, staan wij bekend om onze kwaliteit, betrouwbaarheid en persoonlijke aanpak. Wij specialiseren ons in alle soorten dakrenovaties, reparaties en onderhoud.
                </p>
                <p>
                  Onze missie is om elke klant een waterdicht, duurzaam en mooi dak te bezorgen dat jarenlang meegaat. Dit doen we door gebruik te maken van hoogwaardige materialen en de nieuwste technieken in de branche.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <p className="text-gray-600 text-sm">Jaar ervaring</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">450+</div>
                  <p className="text-gray-600 text-sm">Projecten</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <p className="text-gray-600 text-sm">Klanttevredenheid</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Onze kernwaarden</h2>
            <p className="text-gray-600 text-lg">
              De principes die ten grondslag liggen aan alles wat we doen
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/3"
            >
              <div className="sticky top-32">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-1 w-10 bg-primary"></div>
                  <p className="text-primary font-medium uppercase tracking-wider text-sm">Onze geschiedenis</p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Een decennium van groei en succes
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Bekijk de belangrijkste mijlpalen in de ontwikkeling van Daniel Dakrenovatie door de jaren heen.
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
                >
                  Neem contact met ons op
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-2/3"
            >
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="absolute left-0 md:left-1/2 ml-5 md:-ml-5 mt-5 h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-20 md:ml-0 md:pl-16 md:pr-4 md:max-w-lg md:text-right group-even:md:ml-auto group-even:md:pl-4 group-even:md:pr-16 group-even:text-left">
                        <span className="text-sm text-primary font-medium mb-1 block">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Klaar voor uw dakproject?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Neem vandaag nog contact met ons op voor een gratis inspectie en offerte
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Vraag een offerte aan
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
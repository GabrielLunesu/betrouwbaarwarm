'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Award, Users, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Team from '@/components/team';

const values = [
  {
    icon: <Award size={36} />,
    title: 'Kwaliteit',
    description: 'We streven naar de hoogste kwaliteit in al onze installaties en diensten. We werken alleen met de beste merken en materialen.'
  },
  {
    icon: <Users size={36} />,
    title: 'Klanttevredenheid',
    description: 'De tevredenheid van onze klanten staat centraal. We luisteren naar uw wensen en zorgen voor een oplossing die bij u past.'
  },
  {
    icon: <Clock size={36} />,
    title: 'Betrouwbaarheid',
    description: 'We komen onze afspraken na en staan voor u klaar wanneer u ons nodig heeft. Op BetrouwbaarWarm kunt u rekenen.'
  },
  {
    icon: <Calendar size={36} />,
    title: 'Ervaring',
    description: 'Met jarenlange ervaring in de branche hebben we de kennis en expertise om elke uitdaging aan te gaan.'
  }
];

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background with subtle gradient and animated shapes */}
          <div className="absolute inset-0 bg-white z-0">
            <motion.div 
              className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary-200/20 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Over BetrouwbaarWarm
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  BetrouwbaarWarm is uw specialist in regio Parkstad voor alle oplossingen op het gebied van verwarming en koeling. Met onze jarenlange ervaring en vakkennis zorgen wij voor het perfecte binnenklimaat in uw woning of bedrijf.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Button asChild size="lg" className="font-medium btn-hover">
                    <Link href="/contact" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Neem contact op
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[400px] flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-glass shadow-glass flex items-center justify-center overflow-hidden">
                    <Image
                      src="/team/donato-lunesu.webp"
                      alt="BetrouwbaarWarm Team"
                      fill
                      className="object-cover animate-float"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Verhaal</h2>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Hoe BetrouwbaarWarm is uitgegroeid tot dé specialist in Parkstad.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-glass shadow-glass flex items-center justify-center overflow-hidden">
                  <Image
                    src="/warmtepomp.png"
                    alt="Ons Verhaal"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Van start tot specialist</h3>
                <p className="text-foreground mb-4">
                  BetrouwbaarWarm is opgericht met een duidelijke missie: het bieden van betrouwbare en duurzame oplossingen voor verwarming en koeling in de regio Parkstad. Wat begon als een klein bedrijf is uitgegroeid tot een gerespecteerde specialist in de branche.
                </p>
                <p className="text-foreground mb-4">
                  Met onze jarenlange ervaring en voortdurende bijscholing blijven we op de hoogte van de nieuwste technologieën en ontwikkelingen in de markt. Dit stelt ons in staat om onze klanten altijd de beste en meest efficiënte oplossingen te bieden.
                </p>
                <p className="text-foreground">
                  Onze focus ligt op kwaliteit, betrouwbaarheid en klanttevredenheid. We zijn er trots op dat veel van onze nieuwe klanten bij ons komen via aanbevelingen van tevreden bestaande klanten.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="container-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Waarden</h2>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                De principes die ons werk en onze relatie met klanten vormgeven.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <Team />

        {/* CTA Section */}
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
                    Klaar om samen te werken?
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
                      <Link href="/warmtepompen" className="flex items-center">
                        Bekijk onze diensten
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
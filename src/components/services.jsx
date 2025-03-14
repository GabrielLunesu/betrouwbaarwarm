'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Thermometer, Wind, Flame } from 'lucide-react';

const services = [
  {
    id: 'warmtepompen',
    title: 'Warmtepompen',
    description: 'Duurzame en energiezuinige verwarming voor uw woning of bedrijf. Onze warmtepompen zorgen voor een comfortabel binnenklimaat met lage energiekosten.',
    image: '/warmtepomp.png',
    link: '/warmtepompen',
    icon: Thermometer,
    color: 'bg-primary-100 text-primary-600'
  },
  {
    id: 'airconditioning',
    title: 'Airconditioning',
    description: 'Optimaal comfort tijdens warme dagen. Onze airconditioningsystemen zorgen voor een aangename temperatuur en luchtkwaliteit in elke ruimte.',
    image: '/airco.png',
    link: '/airconditioning',
    icon: Wind,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'cv-ketels',
    title: 'CV-ketels',
    description: 'Betrouwbare verwarmingssystemen voor uw woning. Wij installeren en onderhouden hoogwaardige CV-ketels voor optimale prestaties en levensduur.',
    image: '/cvketel.png',
    link: '/cv-ketels',
    icon: Flame,
    color: 'bg-orange-100 text-orange-600'
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Specialiteiten</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            BetrouwbaarWarm is uw specialist in Parkstad voor alle oplossingen op het gebied van verwarming en koeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-glass backdrop-blur-sm rounded-2xl shadow-glass border border-white/20 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-full ${service.color}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-foreground mb-6 flex-grow">{service.description}</p>
                  <Button asChild variant="outline" className="w-full justify-between group btn-hover">
                    <Link href={service.link}>
                      <span>Meer informatie</span>
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
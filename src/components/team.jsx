'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Donato Lunesu',
    role: 'Warmtepomp Specialist',
    bio: 'Meer dan 10 jaar ervaring in het installeren en onderhouden van warmtepompen. Expert in duurzame verwarmingsoplossingen.',
    image: '/team/donato-lunesu.webp',
    social: {
      linkedin: '#',
      email: 'donato@betrouwbaarwarm.nl',
      phone: '+31 6 12345678',
    }
  },
  {
    id: 2,
    name: 'Yvo Glasbeek',
    role: 'Airconditioning Expert',
    bio: 'Gespecialiseerd in het ontwerpen en installeren van airconditioningsystemen voor woningen en bedrijven. Zorgt voor het perfecte binnenklimaat.',
    image: '/team/yvo-glasbeek.jpg',
    social: {
      linkedin: '#',
      email: 'yvo@betrouwbaarwarm.nl',
      phone: '+31 6 23456789',
    }
  },
  {
    id: 3,
    name: 'Hans Wiersma',
    role: 'CV-ketel Technicus',
    bio: 'Vakman met jarenlange ervaring in het installeren en onderhouden van CV-ketels. Staat garant voor betrouwbare verwarmingssystemen.',
    image: '/team/hans-wiersma.jpg',
    social: {
      linkedin: '#',
      email: 'hans@betrouwbaarwarm.nl',
      phone: '+31 6 34567890',
    }
  },
];

export default function Team() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Team</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Maak kennis met ons team van ervaren professionals die klaarstaan om u te helpen met al uw verwarmings- en koelingsbehoeften.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-glass backdrop-blur-sm rounded-2xl overflow-hidden shadow-glass border border-white/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4 mb-4">
                    <Link href={member.social.linkedin} className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </Link>
                    <Link href={`mailto:${member.social.email}`} className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Mail size={20} />
                    </Link>
                    <Link href={`tel:${member.social.phone}`} className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Phone size={20} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jan de Vries',
    location: 'Heerlen',
    quote: 'BetrouwbaarWarm heeft onze warmtepomp geïnstalleerd en we zijn zeer tevreden. Professioneel, punctueel en uitstekende service!',
    image: 'https://placehold.co/100x100/2563eb/FFFFFF/png?text=JV',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Jansen',
    location: 'Kerkrade',
    quote: 'Onze airconditioning werkt perfect dankzij het team van BetrouwbaarWarm. Ze hebben ons goed geadviseerd en de installatie was snel en netjes.',
    image: 'https://placehold.co/100x100/2563eb/FFFFFF/png?text=MJ',
    rating: 5,
  },
  {
    id: 3,
    name: 'Peter Bakker',
    location: 'Brunssum',
    quote: 'Al jaren laten we ons CV-onderhoud door BetrouwbaarWarm doen. Betrouwbaar, eerlijk en altijd bereid om extra uitleg te geven.',
    image: 'https://placehold.co/100x100/2563eb/FFFFFF/png?text=PB',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Wij zijn trots op de positieve feedback die we van onze klanten ontvangen. Hier zijn enkele ervaringen van tevreden klanten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 relative shadow-glass border border-white/20 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="text-primary/20 absolute top-6 right-6 h-12 w-12" />
              <div className="flex items-center mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground italic leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
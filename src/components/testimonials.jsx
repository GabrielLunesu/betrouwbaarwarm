'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef(null);

  const testimonials = [
    {
      name: "Marco de Vries",
      location: "Amsterdam",
      image: "https://placehold.co/100x100/cccccc/0e2c4b/png?text=MV",
      text: "Zeer tevreden over de kwaliteit van het werk. Het team van Daniel heeft onze dakbedekking keurig vervangen. Alles werd netjes achtergelaten en de communicatie was uitstekend.",
      rating: 5,
      service: "Bitumen dak"
    },
    {
      name: "Lisa Janssen",
      location: "Utrecht",
      image: "https://placehold.co/100x100/cccccc/0e2c4b/png?text=LJ",
      text: "Na een lekkage schakelde ik de spoedservice in. Binnen 3 uur stond het team al op de stoep en hebben ze het probleem snel opgelost. Zeer professioneel en vriendelijk.",
      rating: 5,
      service: "Dakreparatie"
    },
    {
      name: "Peter Bakker",
      location: "Rotterdam",
      image: "https://placehold.co/100x100/cccccc/0e2c4b/png?text=PB",
      text: "Daniel en zijn team hebben ons nieuwe PVC dak geïnstalleerd. Ze kwamen alle afspraken na en hebben vakkundig werk geleverd. De prijs-kwaliteitverhouding is uitstekend.",
      rating: 4,
      service: "PVC dak"
    },
    {
      name: "Sandra Visser",
      location: "Den Haag",
      image: "https://placehold.co/100x100/cccccc/0e2c4b/png?text=SV",
      text: "Voor de renovatie van ons pannendak hebben we meerdere offertes opgevraagd. Daniel Dakrenovatie was niet alleen scherp geprijsd, maar nam ook de tijd om alles goed uit te leggen. Het eindresultaat is prachtig!",
      rating: 5,
      service: "Pannendak"
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prevCurrent) => (prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1));
      }, 6000);
    }
    
    return () => resetTimeout();
  }, [current, autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Wat onze klanten zeggen</h2>
          <p className="text-white/80 text-lg">
            Ontdek waarom honderden klanten ons aanbevelen voor dakrenovaties en -reparaties
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* <div className="absolute -top-12 -left-8 md:-left-16 opacity-20">
            <Quote size={100} className="text-white" />
          </div> */}

          <div className="relative z-10">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 md:p-10 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="rounded-full overflow-hidden border-4 border-primary/10 h-24 w-24 relative mb-4">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">{testimonials[current].name}</h3>
                  <p className="text-gray-500 text-center text-sm">{testimonials[current].location}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <div className="mt-2 bg-primary/10 text-primary text-xs font-medium py-1 px-3 rounded-full">
                    {testimonials[current].service}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic relative">
                    "{testimonials[current].text}"
                  </blockquote>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                  <strong className="text-primary font-medium">{current + 1}</strong> van {testimonials.length} beoordelingen
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevious}
                    className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* <div className="absolute -bottom-12 -right-8 md:-right-16 opacity-20 rotate-180">
            <Quote size={100} className="text-white" />
          </div> */}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 inline-flex items-center">
            <div className="mr-3">
              <div className="text-4xl font-bold text-white">4.9</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
            </div>
            <div className="text-white">
              <p className="font-medium">450+ tevreden klanten</p>
              <p className="text-white/70 text-sm">Gemiddelde beoordeling</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
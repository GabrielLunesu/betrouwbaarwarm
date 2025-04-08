'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedProjects() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef(null);
  
  const projects = [
    {
      title: 'Bitumen dakrenovatie',
      description: 'Complete renovatie van een plat dak met hoogwaardige bitumen dakbedekking.',
      location: 'Amsterdam',
      image: 'https://placehold.co/1200x800/0e2c4b/FFFFFF/png?text=Project+1:+Bitumen+dak'
    },
    {
      title: 'PVC dakbedekking nieuwbouw',
      description: 'Installatie van duurzame PVC dakbedekking bij een nieuwbouwproject.',
      location: 'Rotterdam',
      image: 'https://placehold.co/1200x800/0e2c4b/FFFFFF/png?text=Project+2:+PVC+dak'
    },
    {
      title: 'Pannendak renovatie',
      description: 'Renovatie van een traditioneel pannendak met moderne technieken.',
      location: 'Utrecht',
      image: 'https://placehold.co/1200x800/0e2c4b/FFFFFF/png?text=Project+3:+Pannendak'
    },
    {
      title: 'Schoorsteenrenovatie met loodwerk',
      description: 'Specialistisch loodwerk bij een historische schoorsteenrenovatie.',
      location: 'Den Haag',
      image: 'https://placehold.co/1200x800/0e2c4b/FFFFFF/png?text=Project+4:+Loodwerk'
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
        setCurrent((prevCurrent) => (prevCurrent === projects.length - 1 ? 0 : prevCurrent + 1));
      }, 5000);
    }
    
    return () => resetTimeout();
  }, [current, autoplay, projects.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setCurrent(index);
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Onze Werkzaamheden
          </h2>
          
        </motion.div>

        <div className="relative">
          <div className="relative flex justify-center overflow-hidden rounded-lg shadow-lg">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[16/9]"
            >
              <Image
                src={projects[current].image}
                alt={projects[current].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{projects[current].title}</h3>
                <p className="text-white/80 mb-2">{projects[current].description}</p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/70 text-sm">{projects[current].location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
            <button
              onClick={handlePrevious}
              className="p-2 bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-white/50 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
            <button
              onClick={handleNext}
              className="p-2 bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-white/50 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  current === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-lg mx-auto text-center"
        >
          <p className="text-gray-600 mb-4">
            Nieuwsgierig naar wat we voor uw dak kunnen betekenen?
          </p>
          <div className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-hover transition-colors cursor-pointer">
            Vraag een gratis offerte aan
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
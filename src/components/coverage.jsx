'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Check } from 'lucide-react';

export function Coverage() {
  const cities = [
    'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven',
    'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen',
    'Apeldoorn', 'Haarlem', 'Arnhem', 'Enschede', 'Amersfoort',
    'Zaanstad', 'Zwolle', 'Zoetermeer', 'Leiden', 'Maastricht'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-10 bg-primary"></div>
              <p className="text-primary font-medium uppercase tracking-wider text-sm">Werkgebied</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wij werken in heel Nederland
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Onze professionele dakdekkers staan klaar om u te helpen, waar u ook woont. Met teams verspreid door heel Nederland kunnen we snel inspelen op uw behoeften.
            </p>
            
            <div className="relative p-6 bg-primary/5 rounded-lg border border-primary/10 mb-8">
              <div className="absolute -top-5 -right-5 bg-primary text-white p-2 rounded-md shadow-md flex items-center gap-2">
                <MapPin size={18} /> 
                <span className="font-medium">Landelijke dekking</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{city}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-primary text-sm font-medium">En vele andere steden en dorpen</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                {/* <MapPin className="h-6 w-6 text-primary" /> */}
              </div>
              <div>
                <p className="text-gray-900 font-medium">Ook buiten de grote steden actief</p>
                <p className="text-gray-600 text-sm">We komen graag bij u langs voor een vrijblijvende inspectie en offerte</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-lg z-0"></div>
              <div className="relative z-10">
                <div className="relative h-[650px] rounded-lg overflow-hidden shadow-xl border-8 border-white">
                  <Image
                    src="/map.png"
                    alt="Kaart van Nederland"
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-auto">
                      <path d="M150.5 20C94.5 25 76 89.5 75 119.5C74 149.5 84 182 123 213.5C162 245 189.5 262.5 189.5 262.5C189.5 262.5 228 289 242 319.5C256 350 247 366.5 247 366.5" stroke="#0e2c4b" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12"/>
                      <path d="M184 35C178 59.6667 179.2 114.8 214 140C248.8 165.2 268 183.667 272 191" stroke="#0e2c4b" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12"/>
                      <path d="M82 173C73.2 197.4 73.6667 251.667 122 271C170.333 290.333 172 327.667 165 345" stroke="#0e2c4b" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12"/>
                      
                      <circle cx="150" cy="120" r="15" fill="#0e2c4b" />
                      <circle cx="175" cy="190" r="10" fill="#0e2c4b" />
                      <circle cx="80" cy="170" r="10" fill="#0e2c4b" />
                      <circle cx="242" cy="320" r="10" fill="#0e2c4b" />
                      <circle cx="165" cy="345" r="10" fill="#0e2c4b" />
                    </svg>
                  </div> */}
                </div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Heel Nederland</h3>
                      <p className="text-gray-600 text-sm">Wij komen overal</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
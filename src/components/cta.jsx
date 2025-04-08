'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-primary-hover opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-white/5 rounded-full"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-6">
            Klaar voor een betrouwbaar en waterdicht dak?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/80">
            Neem vandaag nog contact met ons op voor een gratis inspectie en offerte
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Bel ons</h3>
              <p className="text-white/70 mb-4">Direct persoonlijk contact</p>
              <Link 
                href="tel:+31612345678" 
                className="inline-block py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors text-white font-medium"
              >
                +31 6 12345678
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">WhatsApp</h3>
              <p className="text-white/70 mb-4">Snelle reactie via chat</p>
              <Link 
                href="https://wa.me/31612345678" 
                target="_blank"
                className="inline-block py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors text-white font-medium"
              >
                Stuur een bericht
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">E-mail</h3>
              <p className="text-white/70 mb-4">Stuur ons uw vraag</p>
              <Link 
                href="mailto:info@danieldakrenovatie.nl" 
                className="inline-block py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors text-white font-medium"
              >
                info@danieldakrenovatie.nl
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-md max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Vraag een vrijblijvende offerte aan</h3>
            <p className="text-white/80 mb-6">
              Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een gratis inspectie
            </p>
            
            <Link 
              href="/contact"
              className="block w-full bg-white hover:bg-gray-100 text-primary text-center py-4 rounded-md font-medium transition-colors"
            >
              Naar contactformulier
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
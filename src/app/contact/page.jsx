'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
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
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Neem Contact Op
              </motion.h1>
              <motion.p 
                className="text-xl text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Heeft u vragen of wilt u een offerte aanvragen? Neem gerust contact met ons op.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container-center">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-card p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold mb-6">Stuur ons een bericht</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Onderwerp
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="warmtepomp">Warmtepomp</option>
                      <option value="airco">Airconditioning</option>
                      <option value="cv-ketel">CV-ketel</option>
                      <option value="onderhoud">Onderhoud</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full btn-hover">
                    Verstuur bericht
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Telefoon</h3>
                      <p className="mt-1">+31 (0)45 123 4567</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Bereikbaar op werkdagen van 08:00 tot 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">E-mail</h3>
                      <p className="mt-1">info@betrouwbaarwarm.nl</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        We reageren binnen 24 uur op uw e-mail
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Adres</h3>
                      <p className="mt-1">Warmteweg 123</p>
                      <p className="mt-1">6412 AB Heerlen</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Openingstijden</h3>
                      <div className="mt-1 space-y-1">
                        <p>Maandag - Vrijdag: 08:00 - 18:00</p>
                        <p>Zaterdag: 09:00 - 13:00</p>
                        <p>Zondag: Gesloten</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20">
                  <h3 className="text-lg font-medium mb-3">Werkgebied</h3>
                  <p className="mb-4">Wij zijn actief in de regio Parkstad en omstreken:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span>Heerlen</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span>Kerkrade</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span>Brunssum</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span>Landgraaf</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span>Voerendaal</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span>Simpelveld</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold">Vind ons op de kaart</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-96 bg-gradient-glass rounded-2xl overflow-hidden shadow-glass border border-white/20"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40436.27125373095!2d5.9447878!3d50.8834657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0bdb7d8028e37%3A0xc70b3b977f2011a1!2sHeerlen!5e0!3m2!1snl!2snl!4v1710414000000!5m2!1snl!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BetrouwbaarWarm locatie"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
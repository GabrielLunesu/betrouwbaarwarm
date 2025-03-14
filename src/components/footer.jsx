'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-foreground">
      <div className="container-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="mb-6">
              <div className="relative h-12 w-48">
                <Image 
                  src="https://placehold.co/200x50/2563eb/FFFFFF/png?text=BetrouwbaarWarm" 
                  alt="BetrouwbaarWarm Logo" 
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mb-6 text-foreground/80">Uw betrouwbare specialist voor warmtepompen, airconditioning en CV-ketels in regio Parkstad.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all hover:text-primary">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all hover:text-primary">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-bold mb-4">Diensten</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/warmtepompen" className="text-foreground/80 hover:text-primary transition-colors">
                  Warmtepompen
                </Link>
              </li>
              <li>
                <Link href="/airconditioning" className="text-foreground/80 hover:text-primary transition-colors">
                  Airconditioning
                </Link>
              </li>
              <li>
                <Link href="/cv-ketels" className="text-foreground/80 hover:text-primary transition-colors">
                  CV-ketels
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-bold mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/over-ons" className="text-foreground/80 hover:text-primary transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foreground/80 hover:text-primary transition-colors">
                  Privacy beleid
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="text-foreground/80 hover:text-primary transition-colors">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="text-foreground/80">+31 6 12345678</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="text-foreground/80">info@betrouwbaarwarm.nl</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm mt-1">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="text-foreground/80">Parkstad regio<br />Limburg, Nederland</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70"
        >
          <p>&copy; {currentYear} BetrouwbaarWarm. Alle rechten voorbehouden.</p>
          <div className="mt-4 md:mt-0">
            <p>Ontworpen en ontwikkeld met ❤️ in Nederland</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 
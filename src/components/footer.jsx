'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const mainServices = [
    { name: 'Bitumen dak', href: '/diensten/bitumen-dak' },
    { name: 'PVC dak', href: '/diensten/pvc-dak' },
    { name: 'Pannendak', href: '/diensten/pannendak' },
    { name: 'Zink- en loodwerk', href: '/diensten/zink-loodwerk' },
    { name: 'Dakreparatie', href: '/diensten/dakreparatie' },
    { name: 'Daklekkage', href: '/diensten/daklekkage' }
  ];
  
  const otherServices = [
    { name: 'Dakinspectie', href: '/diensten/dakinspectie' },
    { name: 'Dakonderhoud', href: '/diensten/dakonderhoud' },
    { name: 'Vogelwering', href: '/diensten/vogelwering' },
    { name: 'Nokvorsten vervangen', href: '/diensten/nokvorsten' },
    { name: 'Dakreiniging', href: '/diensten/dakreiniging' },
    { name: 'Dakisolatie', href: '/diensten/dakisolatie' }
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png" 
                  alt="Daniel Gábor Dakrenovatie"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-6">
                Uw betrouwbare dakdekker met meer dan 10 jaar ervaring en 450 succesvolle projecten in heel Nederland.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Diensten</h3>
              <ul className="space-y-3">
                {mainServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Meer diensten</h3>
              <ul className="space-y-3">
                {otherServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Telefoon</p>
                    <a href="tel:+31612345678" className="text-gray-400 hover:text-white transition-colors">
                      +31 6 12345678
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/31612345678" 
                      target="_blank" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      +31 6 12345678
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">E-mail</p>
                    <a href="mailto:info@danieldakrenovatie.nl" className="text-gray-400 hover:text-white transition-colors">
                      info@danieldakrenovatie.nl
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Werkgebied</p>
                    <p className="text-gray-400">Heel Nederland</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <div className="text-gray-500 text-sm">
              &copy; {currentYear} Daniel Gábor Dakrenovatie. Alle rechten voorbehouden.
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-800"></div>
            <div className="flex gap-4 text-gray-500 text-sm">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-gray-300 transition-colors">
                Algemene voorwaarden
              </Link>
              <Link href="/sitemap" className="hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-gray-500 text-sm mr-1">NL</span>
              <span className="text-gray-700">/</span>
              <span className="text-gray-500 text-sm">EN</span>
            </div>
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 
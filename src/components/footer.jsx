'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp, MessageCircle } from 'lucide-react';
import { useLanguage, translations } from '@/lib/language-context';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  
  const mainServices = [
    { name: t.roofService.bitumen, href: '/diensten/bitumen-dak' },
    { name: t.roofService.pvc, href: '/diensten/pvc-dak' },
    { name: t.roofService.pannen, href: '/diensten/pannendak' },
    { name: t.roofService.zink, href: '/diensten/zink-loodwerk' },
    { name: t.roofService.lekkage, href: '/diensten/daklekkage' },
    { name: t.roofService.reparatie, href: '/diensten/dakreparatie' }
  ];
  
  const otherServices = [
    { name: t.roofService.inspectie, href: '/diensten/dakinspectie' },
    { name: t.roofService.onderhoud, href: '/diensten/dakonderhoud' },
    { name: t.roofService.vogels, href: '/diensten/vogelwering' },
    { name: t.roofService.nokvorsten, href: '/diensten/nokvorsten' },
    { name: t.roofService.reiniging, href: '/diensten/dakreiniging' },
    { name: t.roofService.isolatie, href: '/diensten/dakisolatie' }
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'nl' ? 'en' : 'nl');
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/danielgaborlogo.png"
                  alt="Daniel Gábor Dakrenovatie"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-6">
                {language === 'nl' 
                  ? 'Uw betrouwbare dakdekker met meer dan 10 jaar ervaring en 450 succesvolle projecten in heel Nederland.'
                  : 'Your reliable roofer with over 10 years of experience and 450 successful projects throughout the Netherlands.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">{language === 'nl' ? 'Diensten' : 'Services'}</h3>
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
              <h3 className="text-lg font-bold mb-6 text-white">{language === 'nl' ? 'Meer diensten' : 'More services'}</h3>
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
              <h3 className="text-lg font-bold mb-6 text-white">{t.contact}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">{t.phoneHeader}</p>
                    <a href="tel:+31657824194" className="text-gray-400 hover:text-white transition-colors">
                      +31 6 57824194
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">{t.whatsApp}</p>
                    <a 
                      href="https://wa.me/31657824194" 
                      target="_blank" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      +31 6 57824194
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">{t.emailHeader}</p>
                    <a href="mailto:info@danieldakrenovatie.nl" className="text-gray-400 hover:text-white transition-colors">
                      info@danieldakrenovatie.nl
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">{t.workArea}</p>
                    <p className="text-gray-400">{t.coverageNL}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <div className="text-gray-500 text-sm">
              &copy; {currentYear} Daniel Gábor Dakrenovatie. {t.allRightsReserved}
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-800"></div>
            <div className="flex gap-4 text-gray-500 text-sm">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                {t.privacyPolicyPage}
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-gray-300 transition-colors">
                {t.termsAndConditions}
              </Link>
              <Link href="/sitemap" className="hover:text-gray-300 transition-colors">
                {t.sitemap}
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity"
            >
              <span className={`transition-all ${language === 'nl' ? 'font-bold text-primary' : 'text-gray-500'}`}>NL</span>
              <span className="mx-1 text-gray-700">/</span>
              <span className={`transition-all ${language === 'en' ? 'font-bold text-primary' : 'text-gray-500'}`}>EN</span>
            </button>
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
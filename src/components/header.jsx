'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, translations } from '@/lib/language-context';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  const navItems = [
    { name: t.home, href: '/' },
    { name: t.aboutUs, href: '/over-ons' },
    { name: t.services, href: '/diensten' },
    { name: t.contact, href: '/contact' },
  ];

  const toggleLanguage = () => {
    changeLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-50">
          <Image
            src="/danielgaborlogo.png" 
            alt="Daniel Gábor Dakrenovatie"
            width={240}
            height={140}
            className="h-28 w-auto transition-all duration-300 hover:scale-105"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center text-sm font-medium hover:opacity-70 transition-opacity bg-gray-100 px-3 py-1.5 rounded-full"
          >
            <span className={`transition-all ${language === 'nl' ? 'font-bold text-primary' : 'text-gray-600'}`}>NL</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className={`transition-all ${language === 'en' ? 'font-bold text-primary' : 'text-gray-600'}`}>EN</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary font-medium hover:text-primary-hover transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Contact buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="tel:+31612345678" 
              className="flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-hover transition-all duration-300 hover:shadow-md"
            >
              <Phone size={17} />
              <span className="font-medium">{t.call}</span>
            </Link>
            <Link 
              href="https://wa.me/31612345678" 
              target="_blank"
              className="flex items-center gap-1.5 bg-green-600 text-white px-5 py-2.5 rounded-md hover:bg-green-700 transition-all duration-300 hover:shadow-md"
            >
              <MessageCircle size={17} />
              <span className="font-medium">{t.whatsApp}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 text-primary bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-28 pb-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              <nav className="flex flex-col space-y-6 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-primary font-medium py-3 border-b border-gray-100 hover:pl-2 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}

                <button 
                  onClick={toggleLanguage}
                  className="flex items-center text-sm font-medium py-3 px-4 text-primary bg-gray-50 rounded-lg"
                >
                  <span>{language === 'nl' ? t.switchToEnglish : t.switchToDutch}</span>
                </button>
              </nav>

              <div className="mt-auto flex flex-col space-y-4 pt-8">
                <Link 
                  href="tel:+31612345678" 
                  className="flex items-center justify-center gap-2 bg-primary text-white py-3.5 px-4 rounded-md hover:bg-primary-hover transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">{t.call}</span>
                </Link>
                <Link 
                  href="https://wa.me/31612345678" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="font-medium">{t.whatsApp}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 
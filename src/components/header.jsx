'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage, translations } from '@/lib/language-context';
import { Portal } from './portal';

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

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
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${ 
          (isMenuOpen || scrolled) ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className={`w-full max-w-7xl mx-auto px-1 sm:px-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-1 sm:py-2' : 'py-2 sm:py-5'}`}>
          <Link href="/" className="relative z-10">
            <Image
              src="/danielgaborlogo.png" 
              alt="Daniel Gábor Dakrenovatie"
              width={180}
              height={100}
              className={`${scrolled ? 'h-12 sm:h-20' : 'h-16 sm:h-28'} w-auto transition-all duration-300 hover:scale-105`}
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="hidden md:flex items-center text-sm font-medium hover:opacity-70 transition-opacity bg-gray-100 px-3 py-1.5 rounded-full"
            >
              <span className={`transition-all ${language === 'nl' ? 'font-bold text-primary' : 'text-gray-600'}`}>NL</span>
              <span className="mx-1 text-gray-400">/</span>
              <span className={`transition-all ${language === 'en' ? 'font-bold text-primary' : 'text-gray-600'}`}>EN</span>
            </button>

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

            <div className="hidden md:flex items-center space-x-3">
              <Link 
                href="tel:+31657824194" 
                className="flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-hover transition-all duration-300 hover:shadow-md"
              >
                <Phone size={17} />
                <span className="font-medium">{t.call}</span>
              </Link>
              <Link 
                href="https://wa.me/31657824194" 
                target="_blank"
                className="flex items-center gap-1.5 bg-green-600 text-white px-5 py-2.5 rounded-md hover:bg-green-700 transition-all duration-300 hover:shadow-md"
              >
                <MessageCircle size={17} />
                <span className="font-medium">{t.whatsApp}</span>
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[1001] text-primary bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <Portal>
        <div
          className={`md:hidden fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />
        <nav
          className={`md:hidden fixed top-0 left-0 right-0 bg-white z-[1001] shadow-lg transition-transform duration-300 ease-in-out transform ${ 
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }
            p-6 pt-24
          `}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
            
          <div className="flex flex-col space-y-4 text-base mb-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-primary font-medium py-2 hover:text-primary-hover transition-colors border-b border-gray-100"
              >
                {item.name}
              </Link>
            ))}
 
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium py-2 px-3 text-primary bg-gray-50 rounded-md w-full text-left"
            >
              <span>{language === 'nl' ? t.switchToEnglish : t.switchToDutch}</span>
            </button>
          </div>
 
          <div className="flex flex-col space-y-3">
            <Link 
              href="tel:+31657824194" 
              className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-hover transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">{t.call}</span>
            </Link>
            <Link 
              href="https://wa.me/31657824194" 
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span className="font-medium">{t.whatsApp}</span>
            </Link>
          </div>
        </nav>
      </Portal>
    </>
  );
} 
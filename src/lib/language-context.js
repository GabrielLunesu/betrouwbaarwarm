'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the language context
export const LanguageContext = createContext();

// Create a provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('nl'); // Default language is Dutch

  // Initialize language from localStorage if available (client-side only)
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Update localStorage when language changes
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create a custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translation dictionary
export const translations = {
  nl: {
    // Common
    home: 'Home',
    aboutUs: 'Over ons',
    services: 'Diensten',
    contact: 'Contact',
    call: 'Bel nu',
    whatsApp: 'WhatsApp',
    email: 'E-mail',
    switchToEnglish: 'Switch to English',
    readMore: 'Lees meer',
    contactUs: 'Neem contact op',

    // Hero
    heroTitle: 'Vakkundig dakwerk voor uw woning',
    heroSubtitle: 'Welkom bij Daniel Dakrenovatie – Jouw betrouwbare dakdekker met meer dan 10 jaar ervaring en 450 succesvolle projecten',
    ourServices: 'Onze diensten',
    askQuestion: 'Stel direct je vraag',

    // Services
    servicesTitle: 'Onze diensten',
    servicesSubtitle: 'Ontdek ons uitgebreide aanbod aan hoogwaardige dakdiensten uitgevoerd door ervaren vakmensen',
    viewAllServices: 'Bekijk al onze diensten',

    // USPs
    whyChooseUs: 'Waarom kiezen voor Daniel Dakrenovatie?',
    experienceAndQuality: 'Met jarenlange ervaring en honderden tevreden klanten staan wij garant voor kwaliteit en betrouwbaarheid.',
    yearsExperience: '10 jaar ervaring',
    roofsRenovated: '450+ daken gerenoveerd',
    yearWarranty: '10 jaar garantie',
    coverageNL: 'Heel Nederland',
    urgentRepairs: 'Ook beschikbaar voor spoedreparaties',

    // CTA
    readyForNewRoof: 'Klaar voor een betrouwbaar en waterdicht dak?',
    contactUsToday: 'Neem vandaag nog contact met ons op voor een gratis inspectie en offerte',
    requestQuote: 'Vraag een vrijblijvende offerte aan',
    formAndInspection: 'Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een gratis inspectie',
    toContactForm: 'Naar contactformulier',
  },
  en: {
    // Common
    home: 'Home',
    aboutUs: 'About us',
    services: 'Services',
    contact: 'Contact',
    call: 'Call now',
    whatsApp: 'WhatsApp',
    email: 'Email',
    switchToDutch: 'Schakel naar Nederlands',
    readMore: 'Read more',
    contactUs: 'Contact us',

    // Hero
    heroTitle: 'Professional roofing for your home',
    heroSubtitle: 'Welcome to Daniel Dakrenovatie – Your reliable roofer with over 10 years of experience and 450 successful projects',
    ourServices: 'Our services',
    askQuestion: 'Ask us directly',

    // Services
    servicesTitle: 'Our services',
    servicesSubtitle: 'Discover our extensive range of high-quality roofing services performed by experienced professionals',
    viewAllServices: 'View all our services',

    // USPs
    whyChooseUs: 'Why choose Daniel Dakrenovatie?',
    experienceAndQuality: 'With years of experience and hundreds of satisfied customers, we guarantee quality and reliability.',
    yearsExperience: '10 years experience',
    roofsRenovated: '450+ roofs renovated',
    yearWarranty: '10 year warranty',
    coverageNL: 'All of the Netherlands',
    urgentRepairs: 'Also available for urgent repairs',

    // CTA
    readyForNewRoof: 'Ready for a reliable and waterproof roof?',
    contactUsToday: 'Contact us today for a free inspection and quote',
    requestQuote: 'Request a free quote',
    formAndInspection: 'Fill out the form and we will contact you within 24 hours for a free inspection',
    toContactForm: 'To contact form',
  }
}; 
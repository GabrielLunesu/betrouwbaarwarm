'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Check 
} from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { useLanguage, translations } from '@/lib/language-context';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    
    // For demo purposes, we'll just set the state
    setFormState(prev => ({
      ...prev,
      submitted: true
    }));
  };

  return (
    <>
      <PageHero 
        title={t.contact} 
        subtitle={language === 'nl' ? 
          "Heeft u vragen of wilt u een offerte aanvragen? Wij helpen u graag verder." : 
          "Do you have questions or would you like to request a quote? We are happy to help you."}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactDetails}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{t.phoneHeader}</h3>
                      <p className="text-gray-600 mb-1">{t.phoneAvailability}</p>
                      <a 
                        href="tel:+31657824194" 
                        className="text-primary font-medium hover:underline"
                      >
                        +31 6 57824194
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{t.whatsApp}</h3>
                      <p className="text-gray-600 mb-1">{t.quickResponse}</p>
                      <a 
                        href="https://wa.me/31657824194" 
                        target="_blank"
                        className="text-primary font-medium hover:underline"
                      >
                        +31 6 57824194
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{t.emailHeader}</h3>
                      <p className="text-gray-600 mb-1">{t.responseTime}</p>
                      <a 
                        href="mailto:info@danieldakrenovatie.nl" 
                        className="text-primary font-medium hover:underline"
                      >
                        info@danieldakrenovatie.nl
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{t.workArea}</h3>
                      <p className="text-gray-600 mb-1">{t.workAreaDesc}</p>
                      <p className="text-primary font-medium">KvK: 96760923</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t.emergencies}</h3>
                  <p className="text-gray-600 mb-4">
                    {t.emergencyDesc}
                  </p>
                  <Link 
                    href="tel:+31657824194"
                    className="inline-flex items-center justify-center w-full bg-red-600 text-white py-3 px-4 rounded-md font-medium hover:bg-red-700 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    {t.callEmergency}
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {formState.submitted ? (
                <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-md">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{t.thankYouTitle}</h2>
                    <p className="text-gray-600 mt-2">
                      {t.thankYouMessage}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                    className="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-primary-hover transition-colors"
                  >
                    {t.newMessage}
                  </button>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.sendMessage}</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t.nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder={t.namePlaceholder}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            {t.emailLabel}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder={t.emailPlaceholder}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            {t.phoneLabel}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder={t.phonePlaceholder}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          {t.serviceLabel}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">{t.selectService}</option>
                          <option value="bitumen">{t.roofService.bitumen}</option>
                          <option value="pvc">{t.roofService.pvc}</option>
                          <option value="pannen">{t.roofService.pannen}</option>
                          <option value="zink">{t.roofService.zink}</option>
                          <option value="lekkage">{t.roofService.lekkage}</option>
                          <option value="reparatie">{t.roofService.reparatie}</option>
                          <option value="inspectie">{t.roofService.inspectie}</option>
                          <option value="anders">{t.roofService.other}</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {t.messageLabel}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder={t.messagePlaceholder}
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-primary text-white py-4 px-6 rounded-md font-medium hover:bg-primary-hover transition-colors"
                        >
                          {t.submitButton}
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        {t.privacyText}{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          {t.privacyPolicy}
                        </Link>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
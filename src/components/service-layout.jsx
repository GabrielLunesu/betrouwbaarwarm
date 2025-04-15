'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ServiceLayout({ 
  title, 
  description, 
  image, 
  features = [], 
  benefits = [],
  process = [],
  faqs = []
}) {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {title}
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Button asChild size="lg" className="font-medium btn-hover">
                    <Link href="/contact" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Vraag een offerte aan
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[400px] flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-glass shadow-glass flex items-center justify-center overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={400}
                      className="object-contain animate-float"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {features.length > 0 && (
          <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenmerken</h2>
                <p className="text-lg text-foreground max-w-2xl mx-auto">
                  Ontdek de belangrijkste kenmerken van onze {title.toLowerCase()}.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-primary mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {benefits.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Voordelen</h2>
                <p className="text-lg text-foreground max-w-2xl mx-auto">
                  Waarom kiezen voor onze {title.toLowerCase()}?
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <div className="bg-primary-100 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {process.length > 0 && (
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Proces</h2>
                <p className="text-lg text-foreground max-w-2xl mx-auto">
                  Hoe wij te werk gaan bij de installatie van uw {title.toLowerCase()}.
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 mb-12 last:mb-0"
                  >
                    <div className="flex-shrink-0 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
                <p className="text-lg text-foreground max-w-2xl mx-auto">
                  Antwoorden op de meest gestelde vragen over {title.toLowerCase()}.
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20"
                  >
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background with gradient and animated shapes */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 z-0">
            <motion.div 
              className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.1, 0.05],
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-10 shadow-glass border border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Klaar voor een {title.toLowerCase()}?
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Neem vandaag nog contact met ons op voor een vrijblijvende offerte of adviesgesprek.
                    Onze experts staan voor u klaar!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary" className="font-medium btn-hover bg-white text-primary-600 hover:bg-white/90">
                      <Link href="/contact" className="flex items-center">
                        <Phone className="mr-2 h-5 w-5" />
                        Neem contact op
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="font-medium border-white/20 hover:bg-white/10 text-white btn-hover">
                      <Link href="/over-ons" className="flex items-center">
                        Meer over ons
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the language context
export const LanguageContext = createContext();

// Create a provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('nl'); // Default language is Dutch
  const [isClient, setIsClient] = useState(false);

  // Flag to identify client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize language from localStorage if available (client-side only)
  useEffect(() => {
    if (isClient) {
      try {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          setLanguage(storedLanguage);
        }
      } catch (e) {
        console.error('Error accessing localStorage:', e);
      }
    }
  }, [isClient]);

  // Update localStorage when language changes
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (isClient) {
      try {
        localStorage.setItem('language', newLanguage);
      } catch (e) {
        console.error('Error setting localStorage:', e);
      }
    }
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
    
    // Contact Form
    contactDetails: 'Contactgegevens',
    phoneHeader: 'Telefoon',
    phoneAvailability: 'Bereikbaar op werkdagen van 07:00 tot 20:00',
    whatsAppHeader: 'WhatsApp',
    quickResponse: 'Snelle reactie via chat',
    emailHeader: 'E-mail',
    responseTime: 'Reactie binnen 24 uur',
    workArea: 'Werkgebied',
    workAreaDesc: 'Wij komen in heel Nederland',
    emergencies: 'Spoedgevallen',
    emergencyDesc: 'Heeft u een daklekkage of stormschade? Bel ons direct voor snelle hulp.',
    callEmergency: 'Bel direct voor noodhulp',
    sendMessage: 'Stuur ons een bericht',
    nameLabel: 'Naam *',
    namePlaceholder: 'Uw naam',
    emailLabel: 'E-mail *',
    emailPlaceholder: 'uw@email.nl',
    phoneLabel: 'Telefoonnummer',
    phonePlaceholder: '+31 6 57824194',
    serviceLabel: 'Dienst',
    selectService: 'Selecteer een dienst',
    messageLabel: 'Bericht *',
    messagePlaceholder: 'Vertel ons over uw project of vraag...',
    submitButton: 'Verstuur bericht',
    privacyText: 'Door dit formulier te versturen gaat u akkoord met onze',
    privacyPolicy: 'privacybeleid',
    thankYouTitle: 'Bedankt voor uw bericht!',
    thankYouMessage: 'We hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.',
    newMessage: 'Nieuw bericht versturen',
    
    // Footer and Legal
    allRightsReserved: 'Alle rechten voorbehouden',
    privacyPolicyPage: 'Privacybeleid',
    termsAndConditions: 'Algemene voorwaarden',
    sitemap: 'Sitemap',
    
    // Services
    roofService: {
      bitumen: 'Bitumen dak',
      pvc: 'PVC dak', 
      pannen: 'Pannendak',
      zink: 'Zink- en loodwerk',
      lekkage: 'Daklekkage verhelpen',
      reparatie: 'Dakreparatie',
      inspectie: 'Dakinspectie',
      onderhoud: 'Dakonderhoud',
      vogels: 'Vogelwering',
      nokvorsten: 'Nokvorsten vervangen',
      reiniging: 'Dakreiniging en dakcoating',
      pannenVervangen: 'Dakpannen vervangen',
      schoorsteen: 'Schoorsteenrenovatie',
      isolatie: 'Dakisolatie',
      goten: 'Dakgoten',
      renovatie: 'Dakrenovatie',
      other: 'Anders'
    },
    
    // Emergency Section
    emergencyService: 'Spoedservice voor daklekkage',
    emergencyDescription: 'Heeft u een daklekkage of stormschade? Wij zijn beschikbaar voor spoedgevallen en helpen u direct uit de nood.',
    available24_6: '24/6 bereikbaar voor noodgevallen',
    fastResponse: 'Snelle responstijd in heel Nederland',
    professionalApproach: 'Professionele aanpak zonder meerkosten',
    callForHelp: 'Bel direct voor noodhulp',
    guaranteedResponse: 'Gegarandeerde responstijd',
    emergencySituations: 'Spoedsituaties',
    within2_4Hours: 'Binnen 2-4 uur',
    regularInspections: 'Reguliere inspecties',
    within1_2Days: 'Binnen 1-2 dagen',
    quotes: 'Offertes',
    within24Hours: 'Binnen 24 uur',
    freeQuote: 'Gratis vrijblijvende offerte',
    quote24Hours: 'Binnen 24 uur een offerte op maat',
    
    // About Section
    aboutUsSection: 'Over ons',
    ownerTitle: 'Eigenaar & Dakexpert Daniel',
    aboutDescription: 'Met passie voor het vak en meer dan een decennium aan ervaring, heeft Daniel zich gespecialiseerd in hoogwaardige dakrenovaties en -reparaties. Samen met zijn team staat hij garant voor kwaliteit en betrouwbaarheid.',
    personalApproach: 'Persoonlijke aanpak',
    directContact: 'Altijd direct contact met de eigenaar',
    craftsmanship: 'Vakmanschap',
    qualityMaterials: 'Uitsluitend met kwaliteitsmaterialen',
    customerSatisfaction: 'Klanttevredenheid',
    successfulProjects: 'Meer dan 450 succesvolle projecten',
    moreAboutUs: 'Meer over ons',
    yearsExperienceText: 'Jaar ervaring',
    
    // Coverage Section
    coverageArea: 'Werkgebied',
    coverageTitle: 'Wij werken in heel Nederland',
    coverageDescription: 'Onze professionele dakdekkers staan klaar om u te helpen, waar u ook woont. Met teams verspreid door heel Nederland kunnen we snel inspelen op uw behoeften.',
    nationalCoverage: 'Landelijke dekking',
    otherCities: 'En vele andere steden en dorpen',
    outsideCities: 'Ook buiten de grote steden actief',
    visitAnywhere: 'We komen graag bij u langs voor een vrijblijvende inspectie en offerte',
    allNetherlands: 'Heel Nederland',
    weComeCoverywhere: 'Wij komen overal',
    
    // CTA Section
    callText: 'Bel ons',
    directPersonalContact: 'Direct persoonlijk contact',
    sendMessageText: 'Stuur een bericht',
    quickResponseChat: 'Snelle reactie via chat',
    emailText: 'E-mail',
    sendUsQuestion: 'Stuur ons uw vraag',
    
    // About Page
    aboutPageSubtitle: 'Al meer dan 10 jaar uw betrouwbare partner voor dakrenovaties en reparaties',
    ourStory: 'Ons verhaal',
    passionForCraftsmanship: 'Passie voor vakmanschap en kwaliteit',
    companyHistory1: 'Daniel Dakrenovatie werd in 2013 opgericht door Daniel, een expert met jarenlange ervaring in de dakdekkersbranche. Wat begon als een eenmanszaak, is uitgegroeid tot een gerenommeerd dakdekkersbedrijf met een team van ervaren vakmensen.',
    companyHistory2: 'Met meer dan 10 jaar ervaring en 450 succesvolle projecten, staan wij bekend om onze kwaliteit, betrouwbaarheid en persoonlijke aanpak. Wij specialiseren ons in alle soorten dakrenovaties, reparaties en onderhoud.',
    companyHistory3: 'Onze missie is om elke klant een waterdicht, duurzaam en mooi dak te bezorgen dat jarenlang meegaat. Dit doen we door gebruik te maken van hoogwaardige materialen en de nieuwste technieken in de branche.',
    yearsText: 'Jaar ervaring',
    projectsText: 'Projecten',
    satisfaction: 'Klanttevredenheid',
    ourValues: 'Onze kernwaarden',
    valuesPrinciples: 'De principes die ten grondslag liggen aan alles wat we doen',
    quality: 'Kwaliteit',
    qualityDescription: 'Wij gebruiken alleen hoogwaardige materialen en werken met de nieuwste technieken.',
    reliability: 'Betrouwbaarheid',
    reliabilityDescription: 'We komen onze afspraken na en staan altijd klaar voor onze klanten.',
    clientFocused: 'Klantgericht',
    clientFocusedDescription: 'Uw wensen staan centraal in ons werk, met persoonlijke aandacht en maatwerk.',
    ourHistory: 'Onze geschiedenis',
    decadeOfGrowth: 'Een decennium van groei en succes',
    milestoneDescription: 'Bekijk de belangrijkste mijlpalen in de ontwikkeling van Daniel Dakrenovatie door de jaren heen.',
    foundingYear: '2013',
    foundingTitle: 'Oprichting Daniel Dakrenovatie',
    foundingDescription: 'Start van het bedrijf door Daniel  met een focus op kwaliteit en service.',
    milestone100: '2016',
    milestone100Title: '100e project afgerond',
    milestone100Description: 'Een belangrijke mijlpaal in de groei van ons bedrijf.',
    teamExpansion: '2018',
    teamExpansionTitle: 'Uitbreiding team',
    teamExpansionDescription: 'Versterking van het team met ervaren dakdekkers om aan de groeiende vraag te voldoen.',
    servicesExpansion: '2020',
    servicesExpansionTitle: 'Uitbreiding diensten',
    servicesExpansionDescription: 'Toevoeging van specialistische diensten zoals zink- en loodwerk.',
    milestone450: '2023',
    milestone450Title: '450+ succesvolle projecten',
    milestone450Description: 'Een nieuwe mijlpaal bereikt met honderden tevreden klanten door heel Nederland.',
    readyForProject: 'Klaar voor uw dakproject?',
    contactForInspection: 'Neem vandaag nog contact met ons op voor een gratis inspectie en offerte',
    requestQuoteCta: 'Vraag een offerte aan',
    ownerInfo: 'Eigenaar & Dakexpert',
    
    // Services Page
    roofServiceLabel: 'Dakdienst',
    advantages: 'Voordelen:',
    moreAbout: 'Meer over',
    moreServicesTitle: 'Meer diensten',
    moreServicesSubtitle: 'Naast onze hoofddiensten bieden wij ook de volgende specialistische diensten aan',
    unsureServiceTitle: 'Niet zeker welke service u nodig heeft?',
    unsureServiceSubtitle: 'Neem contact met ons op voor een vrijblijvende inspectie en advies op maat',
    callDirectly: 'Bel direct:',
    serviceDescriptions: {
      bitumen: 'Professionele installatie en renovatie van bitumen dakbedekking voor platte daken. Duurzaam, waterdicht en bestand tegen diverse weersomstandigheden.',
      pvc: 'Moderne PVC dakbedekking met uitstekende waterdichtheid en levensduur. Lichtgewicht, flexibel en eenvoudig te onderhouden.',
      pannen: 'Renovatie en onderhoud van traditionele en moderne pannendaken. Vakkundige plaatsing en reparatie van alle soorten dakpannen.',
      zink: 'Specialistisch zink- en loodwerk voor dakgoten, schoorstenen en andere dakdetails. Vakkundige afwerking voor optimale bescherming.'
    },
    serviceFeatures: {
      bitumen: ['Lange levensduur', 'UV-bestendig', 'Volledig waterdicht', '10 jaar garantie'],
      pvc: ['Duurzame oplossing', 'Milieuvriendelijk', 'Eenvoudig onderhoud', 'Bestand tegen extreme weersomstandigheden'],
      pannen: ['Breed assortiment dakpannen', 'Traditioneel vakmanschap', 'Esthetisch aantrekkelijk', 'Uitstekende ventilatie'],
      zink: ['Duurzame materialen', 'Waterdichte aansluitingen', 'Esthetisch fraai', 'Corrosiebestendig']
    }
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
    
    // Contact Form
    contactDetails: 'Contact details',
    phoneHeader: 'Phone',
    phoneAvailability: 'Available on weekdays from 07:00 to 20:00',
    whatsAppHeader: 'WhatsApp',
    quickResponse: 'Quick response via chat',
    emailHeader: 'Email',
    responseTime: 'Response within 24 hours',
    workArea: 'Coverage area',
    workAreaDesc: 'We service all of the Netherlands',
    emergencies: 'Emergencies',
    emergencyDesc: 'Do you have a roof leak or storm damage? Call us directly for quick help.',
    callEmergency: 'Call now for emergency help',
    sendMessage: 'Send us a message',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    emailLabel: 'Email *',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+31 6 57824194',
    serviceLabel: 'Service',
    selectService: 'Select a service',
    messageLabel: 'Message *',
    messagePlaceholder: 'Tell us about your project or question...',
    submitButton: 'Send message',
    privacyText: 'By submitting this form, you agree to our',
    privacyPolicy: 'privacy policy',
    thankYouTitle: 'Thank you for your message!',
    thankYouMessage: 'We have received your request and will contact you within 24 hours.',
    newMessage: 'Send a new message',
    
    // Footer and Legal
    allRightsReserved: 'All rights reserved',
    privacyPolicyPage: 'Privacy Policy',
    termsAndConditions: 'Terms and Conditions',
    sitemap: 'Sitemap',
    
    // Services
    roofService: {
      bitumen: 'Bitumen roof',
      pvc: 'PVC roof',
      pannen: 'Tile roof',
      zink: 'Zinc and lead work',
      lekkage: 'Fix roof leakage',
      reparatie: 'Roof repair',
      inspectie: 'Roof inspection',
      onderhoud: 'Roof maintenance',
      vogels: 'Bird control',
      nokvorsten: 'Ridge replacement',
      reiniging: 'Roof cleaning and coating',
      pannenVervangen: 'Replace roof tiles',
      schoorsteen: 'Chimney renovation',
      isolatie: 'Roof insulation',
      goten: 'Gutters',
      renovatie: 'Roof renovation',
      other: 'Other'
    },
    
    // Emergency Section
    emergencyService: 'Emergency service for roof leakage',
    emergencyDescription: 'Do you have a roof leak or storm damage? We are available for emergencies and will help you immediately.',
    available24_6: '24/6 available for emergencies',
    fastResponse: 'Fast response time throughout the Netherlands',
    professionalApproach: 'Professional approach without additional costs',
    callForHelp: 'Call now for emergency help',
    guaranteedResponse: 'Guaranteed response time',
    emergencySituations: 'Emergency situations',
    within2_4Hours: 'Within 2-4 hours',
    regularInspections: 'Regular inspections',
    within1_2Days: 'Within 1-2 days',
    quotes: 'Quotes',
    within24Hours: 'Within 24 hours',
    freeQuote: 'Free non-binding quote',
    quote24Hours: 'Custom quote within 24 hours',
    
    // About Section
    aboutUsSection: 'About us',
    ownerTitle: 'Owner & Roof Expert Daniel',
    aboutDescription: 'With passion for the profession and more than a decade of experience, Daniel has specialized in high-quality roof renovations and repairs. Together with his team, he guarantees quality and reliability.',
    personalApproach: 'Personal approach',
    directContact: 'Always direct contact with the owner',
    craftsmanship: 'Craftsmanship',
    qualityMaterials: 'Only with quality materials',
    customerSatisfaction: 'Customer satisfaction',
    successfulProjects: 'More than 450 successful projects',
    moreAboutUs: 'More about us',
    yearsExperienceText: 'Years experience',
    
    // Coverage Section
    coverageArea: 'Coverage area',
    coverageTitle: 'We work throughout the Netherlands',
    coverageDescription: 'Our professional roofers are ready to help you, wherever you live. With teams spread throughout the Netherlands, we can quickly respond to your needs.',
    nationalCoverage: 'National coverage',
    otherCities: 'And many other cities and villages',
    outsideCities: 'Also active outside major cities',
    visitAnywhere: 'We are happy to visit you for a free inspection and quote',
    allNetherlands: 'All of the Netherlands',
    weComeCoverywhere: 'We come everywhere',
    
    // CTA Section
    callText: 'Call us',
    directPersonalContact: 'Direct personal contact',
    sendMessageText: 'Send a message',
    quickResponseChat: 'Quick response via chat',
    emailText: 'Email',
    sendUsQuestion: 'Send us your question',
    
    // About Page
    aboutPageSubtitle: 'Your reliable partner for roof renovations and repairs for over 10 years',
    ourStory: 'Our story',
    passionForCraftsmanship: 'Passion for craftsmanship and quality',
    companyHistory1: 'Daniel Dakrenovatie was founded in 2013 by Daniel, an expert with years of experience in the roofing industry. What started as a one-man business has grown into a renowned roofing company with a team of experienced professionals.',
    companyHistory2: 'With more than 10 years of experience and 450 successful projects, we are known for our quality, reliability and personal approach. We specialize in all types of roof renovations, repairs and maintenance.',
    companyHistory3: 'Our mission is to provide every customer with a waterproof, durable and beautiful roof that will last for years. We do this by using high-quality materials and the latest techniques in the industry.',
    yearsText: 'Years experience',
    projectsText: 'Projects',
    satisfaction: 'Customer satisfaction',
    ourValues: 'Our core values',
    valuesPrinciples: 'The principles that underlie everything we do',
    quality: 'Quality',
    qualityDescription: 'We only use high-quality materials and work with the latest techniques.',
    reliability: 'Reliability',
    reliabilityDescription: 'We keep our promises and are always there for our customers.',
    clientFocused: 'Client-focused',
    clientFocusedDescription: 'Your wishes are central to our work, with personal attention and customization.',
    ourHistory: 'Our history',
    decadeOfGrowth: 'A decade of growth and success',
    milestoneDescription: 'View the key milestones in the development of Daniel Dakrenovatie over the years.',
    foundingYear: '2013',
    foundingTitle: 'Founding of Daniel Dakrenovatie',
    foundingDescription: 'Start of the company by Daniel with a focus on quality and service.',
    milestone100: '2016',
    milestone100Title: '100th project completed',
    milestone100Description: 'An important milestone in the growth of our company.',
    teamExpansion: '2018',
    teamExpansionTitle: 'Team expansion',
    teamExpansionDescription: 'Strengthening the team with experienced roofers to meet growing demand.',
    servicesExpansion: '2020',
    servicesExpansionTitle: 'Service expansion',
    servicesExpansionDescription: 'Addition of specialized services such as zinc and lead work.',
    milestone450: '2023',
    milestone450Title: '450+ successful projects',
    milestone450Description: 'A new milestone reached with hundreds of satisfied customers throughout the Netherlands.',
    readyForProject: 'Ready for your roofing project?',
    contactForInspection: 'Contact us today for a free inspection and quote',
    requestQuoteCta: 'Request a quote',
    ownerInfo: 'Owner & Roof Expert',
    
    // Services Page
    roofServiceLabel: 'Roofing service',
    advantages: 'Advantages:',
    moreAbout: 'More about',
    moreServicesTitle: 'More services',
    moreServicesSubtitle: 'In addition to our main services, we also offer the following specialized services',
    unsureServiceTitle: 'Not sure which service you need?',
    unsureServiceSubtitle: 'Contact us for a free inspection and customized advice',
    callDirectly: 'Call directly:',
    serviceDescriptions: {
      bitumen: 'Professional installation and renovation of bitumen roofing for flat roofs. Durable, waterproof and resistant to various weather conditions.',
      pvc: 'Modern PVC roofing with excellent water resistance and lifespan. Lightweight, flexible and easy to maintain.',
      pannen: 'Renovation and maintenance of traditional and modern tile roofs. Expert installation and repair of all types of roof tiles.',
      zink: 'Specialized zinc and lead work for gutters, chimneys and other roof details. Professional finish for optimal protection.'
    },
    serviceFeatures: {
      bitumen: ['Long lifespan', 'UV resistant', 'Fully waterproof', '10 year warranty'],
      pvc: ['Sustainable solution', 'Environmentally friendly', 'Easy maintenance', 'Resistant to extreme weather conditions'],
      pannen: ['Wide range of roof tiles', 'Traditional craftsmanship', 'Aesthetically attractive', 'Excellent ventilation'],
      zink: ['Durable materials', 'Waterproof connections', 'Aesthetically pleasing', 'Corrosion resistant']
    }
  }
}; 
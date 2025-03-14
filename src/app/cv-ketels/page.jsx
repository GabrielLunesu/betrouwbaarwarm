'use client';

import ServiceLayout from '@/components/service-layout';
import { Flame, Droplets, Gauge, Wrench as ToolIcon, Clock, Shield, Zap, ThumbsUp, Wrench } from 'lucide-react';

export default function CVKetelsPage() {
  const features = [
    {
      icon: <Flame size={36} />,
      title: 'Efficiënte Verwarming',
      description: 'Onze CV-ketels bieden een hoog rendement en zorgen voor een comfortabele temperatuur in uw woning, het hele jaar door.'
    },
    {
      icon: <Droplets size={36} />,
      title: 'Warm Water Voorziening',
      description: 'Naast verwarming zorgen onze CV-ketels ook voor een constante aanvoer van warm water voor uw dagelijkse behoeften.'
    },
    {
      icon: <Gauge size={36} />,
      title: 'Energiezuinig',
      description: 'We installeren alleen energiezuinige HR-ketels die voldoen aan de nieuwste normen, wat resulteert in lagere energiekosten.'
    },
    {
      icon: <ToolIcon size={36} />,
      title: 'Professionele Installatie',
      description: 'Onze ervaren monteurs zorgen voor een vakkundige installatie volgens de hoogste veiligheids- en kwaliteitsnormen.'
    },
    {
      icon: <Clock size={36} />,
      title: 'Snelle Service',
      description: 'Bij storingen of onderhoud staan we snel voor u klaar, zodat u nooit lang zonder verwarming of warm water zit.'
    },
    {
      icon: <Shield size={36} />,
      title: 'Garantie & Zekerheid',
      description: 'Al onze installaties komen met uitgebreide garantie en we bieden onderhoudscontracten voor langdurige zekerheid.'
    }
  ];

  const benefits = [
    {
      icon: <Flame size={24} />,
      title: 'Betrouwbare Warmte',
      description: 'Een moderne CV-ketel biedt betrouwbare verwarming en warm water, ongeacht de buitentemperatuur, wat zorgt voor een comfortabel binnenklimaat het hele jaar door.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Energiebesparing',
      description: 'Moderne HR-ketels hebben een rendement tot 98%, wat aanzienlijk lager is dan oudere modellen. Dit kan resulteren in een besparing tot 30% op uw energierekening.'
    },
    {
      icon: <Gauge size={24} />,
      title: 'Precieze Temperatuurregeling',
      description: 'Met een moderne thermostaat kunt u de temperatuur in uw woning nauwkeurig regelen, wat zorgt voor optimaal comfort en verdere energiebesparing.'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Eenvoudig Onderhoud',
      description: 'Moderne CV-ketels vereisen minder onderhoud dan oudere modellen en zijn ontworpen voor eenvoudige toegang tot componenten, wat de onderhoudskosten verlaagt.'
    },
    {
      icon: <ThumbsUp size={24} />,
      title: 'Milieuvriendelijker',
      description: 'HR-ketels stoten minder CO2 uit dan oudere modellen, wat bijdraagt aan een kleinere ecologische voetafdruk voor uw huishouden.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Veiligheid',
      description: 'Moderne CV-ketels zijn uitgerust met geavanceerde veiligheidssystemen die het risico op gas- of koolmonoxidelekken minimaliseren, wat zorgt voor een veilige woonomgeving.'
    }
  ];

  const process = [
    {
      title: 'Persoonlijk Adviesgesprek',
      description: 'We beginnen met een persoonlijk gesprek om uw verwarmingsbehoeften en de specifieke situatie van uw woning te bespreken. We adviseren u over de meest geschikte CV-ketel voor uw situatie.'
    },
    {
      title: 'Locatie Inspectie',
      description: 'Onze technische experts voeren een grondige inspectie uit van uw huidige verwarmingssysteem en de specifieke vereisten voor de nieuwe installatie.'
    },
    {
      title: 'Gedetailleerd Voorstel',
      description: 'We stellen een transparante en gedetailleerde offerte op, inclusief alle kosten voor de CV-ketel, installatie, en eventuele aanpassingen aan uw huidige systeem.'
    },
    {
      title: 'Professionele Installatie',
      description: 'Ons ervaren team zorgt voor een vakkundige installatie van uw nieuwe CV-ketel, met minimale verstoring van uw dagelijks leven. We zorgen ervoor dat alles veilig en volgens de hoogste standaarden wordt geïnstalleerd.'
    },
    {
      title: 'Demonstratie en Uitleg',
      description: 'Na de installatie geven we een uitgebreide uitleg over de werking van uw nieuwe CV-ketel en hoe u deze optimaal kunt gebruiken voor maximaal comfort en efficiëntie.'
    },
    {
      title: 'Onderhoud & Service',
      description: 'We bieden onderhoudscontracten aan om ervoor te zorgen dat uw CV-ketel optimaal blijft presteren. Bij storingen staan we snel voor u klaar met onze 24/7 servicedienst.'
    }
  ];

  const faqs = [
    {
      question: 'Hoe vaak moet een CV-ketel onderhouden worden?',
      answer: 'We raden aan om uw CV-ketel jaarlijks te laten onderhouden. Regelmatig onderhoud zorgt voor een efficiënte werking, verlengt de levensduur van uw ketel, voorkomt storingen en is vaak een vereiste voor het behouden van uw garantie. Bovendien is het voor uw eigen veiligheid belangrijk om regelmatig te controleren op eventuele gas- of koolmonoxidelekken.'
    },
    {
      question: 'Wat is het verschil tussen een HR-ketel en een gewone CV-ketel?',
      answer: 'Een HR-ketel (Hoog Rendement) is veel efficiënter dan een conventionele CV-ketel. HR-ketels halen warmte uit de rookgassen die normaal gesproken verloren zouden gaan, wat resulteert in een rendement tot 98%. Dit betekent dat bijna alle energie uit het gas wordt omgezet in nuttige warmte, wat leidt tot lagere energiekosten en minder CO2-uitstoot.'
    },
    {
      question: 'Hoe lang gaat een CV-ketel mee?',
      answer: 'De gemiddelde levensduur van een moderne CV-ketel is 15 tot 20 jaar, mits deze goed wordt onderhouden. Factoren die de levensduur beïnvloeden zijn de kwaliteit van de ketel, de frequentie van gebruik, waterkwaliteit en regelmatig onderhoud. Als uw ketel ouder is dan 15 jaar, kan het economisch voordeliger zijn om deze te vervangen door een nieuwer, efficiënter model.'
    },
    {
      question: 'Kan ik mijn oude CV-ketel zelf vervangen?',
      answer: 'Nee, het vervangen van een CV-ketel is werk voor een gecertificeerde installateur. In Nederland moet iedereen die aan gasinstallaties werkt in het bezit zijn van de juiste certificeringen. Bovendien is het werken met gas potentieel gevaarlijk en kunnen fouten leiden tot gas- of koolmonoxidelekken. Onze installateurs zijn volledig gecertificeerd en hebben de ervaring om uw ketel veilig en correct te installeren.'
    },
    {
      question: 'Wat kost een nieuwe CV-ketel inclusief installatie?',
      answer: 'De kosten voor een nieuwe CV-ketel inclusief installatie variëren afhankelijk van het type ketel, het merk, de capaciteit en de specifieke situatie in uw woning. Gemiddeld kunt u rekenen op een bedrag tussen de €1.500 en €2.500 voor een standaard installatie. Tijdens ons adviesgesprek kunnen we een nauwkeurige prijsopgave maken op basis van uw specifieke situatie.'
    }
  ];

  return (
    <ServiceLayout
      title="CV-ketels"
      description="Betrouwbare verwarmingssystemen voor uw woning. Wij installeren en onderhouden hoogwaardige CV-ketels voor optimale prestaties en een lange levensduur."
      image="/cvketel.png"
      features={features}
      benefits={benefits}
      process={process}
      faqs={faqs}
    />
  );
} 
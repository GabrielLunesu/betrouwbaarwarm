'use client';

import ServiceLayout from '@/components/service-layout';
import { Thermometer, Wind, Droplets, VolumeX, Zap, Gauge, Clock, ThumbsUp, Shield } from 'lucide-react';

export default function AirconditioningPage() {
  const features = [
    {
      icon: <Thermometer size={36} />,
      title: 'Optimale Temperatuur',
      description: 'Onze airconditioningsystemen zorgen voor een aangename temperatuur in uw woning of bedrijf, zelfs tijdens de warmste zomerdagen.'
    },
    {
      icon: <Wind size={36} />,
      title: 'Verbeterde Luchtkwaliteit',
      description: 'Moderne airconditioners filteren de lucht en verwijderen stof, pollen en andere allergenen, wat resulteert in een gezondere leefomgeving.'
    },
    {
      icon: <Droplets size={36} />,
      title: 'Luchtvochtigheidsregeling',
      description: 'Naast koeling regelen onze systemen ook de luchtvochtigheid, wat zorgt voor een comfortabeler binnenklimaat en voorkomt schimmelvorming.'
    },
    {
      icon: <VolumeX size={36} />,
      title: 'Stille Werking',
      description: 'Onze moderne airconditioners werken fluisterstil, zodat u kunt genieten van een koele omgeving zonder storende geluiden.'
    },
    {
      icon: <Zap size={36} />,
      title: 'Energiezuinig',
      description: 'We installeren alleen energiezuinige airconditioners met een hoog rendement, wat zorgt voor lagere energiekosten.'
    },
    {
      icon: <Gauge size={36} />,
      title: 'Slimme Bediening',
      description: 'Bedien uw airconditioning eenvoudig via uw smartphone of tablet, waar u ook bent, voor maximaal comfort en efficiëntie.'
    }
  ];

  const benefits = [
    {
      icon: <Thermometer size={24} />,
      title: 'Comfort Het Hele Jaar Door',
      description: 'Moderne airconditioners kunnen zowel koelen als verwarmen, waardoor u het hele jaar door kunt genieten van een comfortabel binnenklimaat.'
    },
    {
      icon: <Wind size={24} />,
      title: 'Gezondere Leefomgeving',
      description: 'Door de lucht te filteren en te ontvochtigen, dragen airconditioners bij aan een gezondere leefomgeving met minder allergenen en schimmels.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Energiebesparing',
      description: 'Moderne inverter airconditioners passen hun vermogen aan op basis van de behoefte, wat resulteert in een aanzienlijke energiebesparing ten opzichte van oudere modellen.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Verhoogde Productiviteit',
      description: 'Een comfortabele werktemperatuur verhoogt de productiviteit en concentratie, wat vooral belangrijk is in kantoor- of werkomgevingen.'
    },
    {
      icon: <ThumbsUp size={24} />,
      title: 'Betere Nachtrust',
      description: 'Een aangename slaapkamertemperatuur draagt bij aan een betere nachtrust, wat essentieel is voor uw gezondheid en welzijn.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Bescherming van Apparatuur',
      description: 'In ruimtes met elektronische apparatuur zorgt airconditioning voor een stabiele temperatuur en luchtvochtigheid, wat de levensduur van uw apparatuur verlengt.'
    }
  ];

  const process = [
    {
      title: 'Persoonlijk Adviesgesprek',
      description: 'We beginnen met een gesprek om uw specifieke wensen en de situatie van uw woning of bedrijfspand te begrijpen. We bespreken de verschillende opties en helpen u bij het maken van de juiste keuze.'
    },
    {
      title: 'Locatie Inspectie',
      description: 'Onze technische experts bezoeken uw locatie om de ruimte te inspecteren en de beste plaatsing voor uw airconditioning te bepalen, rekening houdend met factoren zoals zonlicht, isolatie en ruimtegebruik.'
    },
    {
      title: 'Gedetailleerd Voorstel',
      description: 'Op basis van de inspectie stellen we een gedetailleerd voorstel op met verschillende opties, prijzen en een tijdlijn voor de installatie. We zorgen ervoor dat u alle informatie heeft om een weloverwogen beslissing te nemen.'
    },
    {
      title: 'Professionele Installatie',
      description: 'Ons ervaren team zorgt voor een nette en efficiënte installatie van uw airconditioning, met minimale verstoring van uw dagelijkse activiteiten. We zorgen ervoor dat alles volgens de hoogste standaarden wordt geïnstalleerd.'
    },
    {
      title: 'Demonstratie en Uitleg',
      description: 'Na de installatie geven we een uitgebreide demonstratie van uw nieuwe airconditioning en leggen we uit hoe u deze optimaal kunt gebruiken voor maximaal comfort en efficiëntie.'
    },
    {
      title: 'Onderhoud en Service',
      description: 'We bieden regelmatige onderhoudsservices aan om ervoor te zorgen dat uw airconditioning optimaal blijft presteren en een lange levensduur heeft. Onze klantenservice staat altijd klaar om eventuele vragen te beantwoorden.'
    }
  ];

  const faqs = [
    {
      question: 'Welk type airconditioning is het beste voor mijn woning?',
      answer: 'Dit hangt af van verschillende factoren zoals de grootte van uw woning, uw budget, en specifieke wensen. Split-unit airconditioners zijn populair voor woningen omdat ze efficiënt en relatief eenvoudig te installeren zijn. Multi-split systemen zijn ideaal als u meerdere ruimtes wilt koelen. Tijdens een persoonlijk adviesgesprek kunnen we de beste optie voor uw situatie bepalen.'
    },
    {
      question: 'Hoe energiezuinig zijn moderne airconditioners?',
      answer: 'Moderne airconditioners zijn aanzienlijk energiezuiniger dan oudere modellen. Inverter airconditioners passen hun vermogen aan op basis van de behoefte, wat resulteert in een energiebesparing tot 30-50% vergeleken met niet-inverter modellen. Let bij aanschaf op het energielabel; A+++ is het meest efficiënt.'
    },
    {
      question: 'Hoe vaak moet een airconditioning onderhouden worden?',
      answer: 'Voor optimale prestaties en een lange levensduur raden we aan om uw airconditioning minstens één keer per jaar te laten onderhouden. Bij intensief gebruik of in stoffige omgevingen kan vaker onderhoud nodig zijn. Regelmatig onderhoud zorgt voor een efficiëntere werking, lagere energiekosten en een betere luchtkwaliteit.'
    },
    {
      question: 'Kan een airconditioning ook verwarmen?',
      answer: 'Ja, veel moderne airconditioners zijn warmtepompen die zowel kunnen koelen als verwarmen. Deze systemen zijn zeer efficiënt in het verwarmen van ruimtes en kunnen een goede aanvulling of alternatief zijn voor traditionele verwarmingssystemen, vooral in de tussenseizoenen.'
    },
    {
      question: 'Hoe lang duurt de installatie van een airconditioning?',
      answer: 'De installatietijd varieert afhankelijk van het type systeem en de complexiteit van de installatie. Een standaard split-unit installatie duurt meestal 1 dag. Multi-split systemen of meer complexe installaties kunnen 2-3 dagen duren. We streven ernaar om de installatie zo efficiënt mogelijk uit te voeren met minimale verstoring.'
    }
  ];

  return (
    <ServiceLayout
      title="Airconditioning"
      description="Optimaal comfort tijdens warme dagen. Onze airconditioningsystemen zorgen voor een aangename temperatuur en luchtkwaliteit in elke ruimte van uw woning of bedrijf."
      image="/airco.png"
      features={features}
      benefits={benefits}
      process={process}
      faqs={faqs}
    />
  );
} 
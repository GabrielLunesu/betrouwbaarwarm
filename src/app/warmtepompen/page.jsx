'use client';

import ServiceLayout from '@/components/service-layout';
import { Thermometer, Leaf, Coins, Home, BarChart, Zap, Clock, ThumbsUp, Shield } from 'lucide-react';

export default function WarmtepompenPage() {
  const features = [
    {
      icon: <Thermometer size={36} />,
      title: 'Efficiënte Verwarming',
      description: 'Onze warmtepompen bieden een hoog rendement en zorgen voor een comfortabele temperatuur in uw woning, het hele jaar door.'
    },
    {
      icon: <Leaf size={36} />,
      title: 'Milieuvriendelijk',
      description: 'Warmtepompen gebruiken hernieuwbare energie uit de lucht, bodem of grondwater, wat zorgt voor een aanzienlijke vermindering van CO2-uitstoot.'
    },
    {
      icon: <Coins size={36} />,
      title: 'Kostenbesparend',
      description: 'Bespaar tot 50% op uw energierekening in vergelijking met traditionele verwarmingssystemen zoals CV-ketels.'
    },
    {
      icon: <Home size={36} />,
      title: 'Geschikt voor Elke Woning',
      description: 'Of het nu gaat om een nieuwbouwwoning of een bestaand pand, wij hebben de juiste warmtepomp voor uw situatie.'
    },
    {
      icon: <BarChart size={36} />,
      title: 'Slimme Regeling',
      description: 'Moderne warmtepompen zijn uitgerust met slimme technologie die u volledige controle geeft over uw binnenklimaat.'
    },
    {
      icon: <Zap size={36} />,
      title: 'Combineerbaar met Zonnepanelen',
      description: 'Voor maximale duurzaamheid kunt u uw warmtepomp combineren met zonnepanelen voor een nog lagere energierekening.'
    }
  ];

  const benefits = [
    {
      icon: <Coins size={24} />,
      title: 'Lagere Energiekosten',
      description: 'Warmtepompen zijn zeer efficiënt en kunnen uw energierekening aanzienlijk verlagen. Voor elke kilowatt elektriciteit die wordt gebruikt, produceren ze gemiddeld 3 tot 5 kilowatt aan warmte.'
    },
    {
      icon: <Leaf size={24} />,
      title: 'Duurzame Oplossing',
      description: 'Door gebruik te maken van hernieuwbare energiebronnen dragen warmtepompen bij aan een schonere planeet en helpen ze bij het verminderen van uw ecologische voetafdruk.'
    },
    {
      icon: <Thermometer size={24} />,
      title: 'Verwarming én Koeling',
      description: 'Veel warmtepompen kunnen zowel verwarmen als koelen, waardoor u het hele jaar door een comfortabel binnenklimaat heeft met slechts één systeem.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Lange Levensduur',
      description: 'Met een gemiddelde levensduur van 15 tot 20 jaar en minimaal onderhoud zijn warmtepompen een betrouwbare investering voor de lange termijn.'
    },
    {
      icon: <ThumbsUp size={24} />,
      title: 'Subsidies Beschikbaar',
      description: 'Er zijn verschillende overheidssubsidies beschikbaar voor de aanschaf van een warmtepomp, waardoor de initiële investering lager uitvalt.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Verhoogde Woningwaarde',
      description: 'Een duurzaam verwarmingssysteem zoals een warmtepomp kan de waarde van uw woning verhogen en maakt deze aantrekkelijker voor toekomstige kopers.'
    }
  ];

  const process = [
    {
      title: 'Persoonlijk Adviesgesprek',
      description: 'We beginnen met een persoonlijk gesprek om uw wensen en de specifieke situatie van uw woning te bespreken. Op basis hiervan geven we advies over de meest geschikte warmtepomp voor uw situatie.'
    },
    {
      title: 'Locatie Inspectie',
      description: 'Onze technische experts voeren een grondige inspectie uit van uw woning om de exacte vereisten voor de installatie te bepalen en eventuele uitdagingen te identificeren.'
    },
    {
      title: 'Gedetailleerd Voorstel',
      description: 'We stellen een transparante en gedetailleerde offerte op, inclusief alle kosten en een tijdlijn voor de installatie. We bespreken ook de beschikbare subsidies en financieringsopties.'
    },
    {
      title: 'Professionele Installatie',
      description: 'Ons ervaren team zorgt voor een vakkundige installatie van uw warmtepomp, met minimale verstoring van uw dagelijks leven. We zorgen ervoor dat alles netjes en volgens de hoogste standaarden wordt geïnstalleerd.'
    },
    {
      title: 'Demonstratie en Uitleg',
      description: 'Na de installatie geven we een uitgebreide uitleg over de werking van uw nieuwe warmtepomp en hoe u deze optimaal kunt gebruiken voor maximaal comfort en efficiëntie.'
    },
    {
      title: 'Onderhoud en Service',
      description: 'We blijven beschikbaar voor vragen en bieden onderhoudsservices aan om ervoor te zorgen dat uw warmtepomp optimaal blijft presteren gedurende de hele levensduur.'
    }
  ];

  const faqs = [
    {
      question: 'Hoe werkt een warmtepomp precies?',
      answer: 'Een warmtepomp haalt warmte uit de lucht, bodem of grondwater en verhoogt deze temperatuur om uw woning te verwarmen. Het werkt volgens hetzelfde principe als een koelkast, maar dan omgekeerd. Het systeem gebruikt elektriciteit om de warmte te verplaatsen, maar produceert meer warmte-energie dan de elektrische energie die het verbruikt.'
    },
    {
      question: 'Is een warmtepomp geschikt voor mijn woning?',
      answer: 'Warmtepompen zijn geschikt voor de meeste woningen, maar de specifieke type warmtepomp hangt af van factoren zoals de isolatie van uw woning, beschikbare ruimte en uw verwarmingsbehoefte. Tijdens een persoonlijk adviesgesprek kunnen we bepalen welk type het beste bij uw situatie past.'
    },
    {
      question: 'Hoeveel kan ik besparen met een warmtepomp?',
      answer: 'De exacte besparing hangt af van verschillende factoren, maar gemiddeld kunt u 30-50% besparen op uw verwarmingskosten in vergelijking met een traditionele CV-ketel. Bij combinatie met zonnepanelen kunnen de besparingen nog hoger uitvallen.'
    },
    {
      question: 'Welke subsidies zijn er beschikbaar voor warmtepompen?',
      answer: 'Er zijn verschillende subsidies beschikbaar, zoals de ISDE (Investeringssubsidie Duurzame Energie) en mogelijk lokale subsidies. Tijdens ons adviesgesprek informeren we u over de actuele subsidiemogelijkheden en helpen we u bij de aanvraag.'
    },
    {
      question: 'Hoe lang duurt de installatie van een warmtepomp?',
      answer: 'De installatietijd varieert afhankelijk van het type warmtepomp en de specifieke situatie van uw woning. Gemiddeld duurt een lucht-water warmtepomp installatie 2-3 dagen, terwijl een bodem-water warmtepomp langer kan duren vanwege de benodigde grondboringen.'
    }
  ];

  return (
    <ServiceLayout
      title="Warmtepompen"
      description="Duurzame en energiezuinige verwarming voor uw woning of bedrijf. Onze warmtepompen zorgen voor een comfortabel binnenklimaat met lage energiekosten en minimale impact op het milieu."
      image="/warmtepomp.png"
      features={features}
      benefits={benefits}
      process={process}
      faqs={faqs}
    />
  );
} 
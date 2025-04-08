'use client';

import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { CTA } from '@/components/cta';
import { AboutPreview } from '@/components/about-preview';
import { USPs } from '@/components/usps';
import { Emergency } from '@/components/emergency';
import { Coverage } from '@/components/coverage';
import { FeaturedProjects } from '@/components/featured-projects';

export default function Home() {
  return (
    <>
      <Hero />
      <USPs />
      <Services />
      <AboutPreview />
      {/* <FeaturedProjects /> */}
      <Testimonials />
      <Emergency />
      <Coverage />
      <CTA />
    </>
  );
}

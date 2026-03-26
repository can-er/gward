import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Promises } from './components/Promises';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg font-sans selection:bg-emerald/30 selection:text-forest">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Promises />
        <SocialProof />
        <Pricing />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

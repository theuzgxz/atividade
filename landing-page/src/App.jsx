import './index.css';
import Hero from './components/Hero';
import Problems from './components/Problems';
import ForWho from './components/ForWho';
import Benefits from './components/Benefits';
import WhatIsInside from './components/WhatIsInside';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Bonuses from './components/Bonuses';
import FeaturedTestimonial from './components/FeaturedTestimonial';
import Testimonials from './components/Testimonials';
import Author from './components/Author';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import { useEffect } from 'react';
import { trackPixelEvent } from './utils/pixel';

export default function App() {
  useEffect(() => {
    trackPixelEvent('ViewContent', {
      content_name: 'Landing Page 267+ Atividades',
      content_category: 'Educação',
    });
  }, []);

  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Problemas */}
      <Problems />

      {/* 3. Para quem é */}
      <ForWho />

      {/* 4. Benefícios */}
      <Benefits />

      {/* 5. O que você recebe */}
      <WhatIsInside />

      {/* 6. Galeria de amostras */}
      <Gallery />

      {/* 7. Como funciona */}
      <HowItWorks />

      {/* 8. Bônus inclusos */}
      <Bonuses />

      {/* 9. Depoimento em destaque */}
      <FeaturedTestimonial />

      {/* 9. Prova social */}
      <Testimonials />

      {/* 10. Quem é a autora */}
      <Author />

      {/* 11. Preços */}
      <Pricing />

      {/* 12. Garantia */}
      <Guarantee />

      {/* 13. FAQ */}
      <FAQ />

      {/* 14. CTA Final */}
      <FinalCTA />
    </main>
  );
}

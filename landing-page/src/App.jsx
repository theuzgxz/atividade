import './index.css';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import WhatIsInside from './components/WhatIsInside';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import VSLPlayer from './components/VSLPlayer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyBar from './components/StickyBar';
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
    <>
      <main className="pb-20 lg:pb-0">
        {/* 1. Hero — Dor + Ganho + Ancoragem de preço */}
        <Hero />

        {/* 2. Problema — Identificação emocional */}
        <Problems />

        {/* 3. Comparação — Genérico vs Kit Premium */}
        <Comparison />

        {/* 4. Solução — Mecanismo único */}
        <Benefits />

        {/* 5. O que você recebe — Conteúdo detalhado */}
        <WhatIsInside />

        {/* 6. Amostra real — Carrossel de páginas */}
        <Gallery />

        {/* 7. Como funciona — 3 passos */}
        <HowItWorks />

        {/* 8. Prova social — Depoimentos + WhatsApp */}
        <Testimonials />

        {/* 9. VSL — Player de vídeo antes dos kits */}
        <VSLPlayer />

        {/* 10. Oferta — Kit Essencial protagonista */}
        <Pricing />

        {/* 10. Quebra de objeções */}
        <FAQ />

        {/* 11. Garantia — Risco zero */}
        <Guarantee />

        {/* 12. CTA Final */}
        <FinalCTA />
      </main>

      {/* Sticky CTA — apenas mobile */}
      <StickyBar />
    </>
  );
}
